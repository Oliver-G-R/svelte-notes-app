<script lang="ts">
	import { io } from '../socket'

	import { onMount, onDestroy } from 'svelte'

	import type { FormNote, Note } from '../models/Notes'
	import noteService from '../services/Notes'
	import { noteStore } from '../store'
	import { NOTE_ACTIONS } from '../actions/notes.actions'

	let note: FormNote = {
		title: '',
		description: '',
		done: false
	}

	let loading = false
	let error: string | undefined = undefined

	const { currentIdNote } = noteStore

	const handleNote = async () => {
		loading = true
		if ($currentIdNote) {
			await updateNote()
		} else {
			await saveNote()
		}
		loading = false
		note = {
			title: '',
			description: '',
			done: false
		}
		currentIdNote.set('')
	}

	const saveNote = async () => {
		const response = await noteService.createNote(note)
		if (response.error) {
			error = response.error?.message
		}
	}
	const updateNote = async () => {
		const response = await noteService.updateNote($currentIdNote, note)

		if (response.error) {
			error = response.error.message
		}
	}

	onMount(() => {
		io.socket('/notes')
			.on(NOTE_ACTIONS.CREATE_NOTE, (note: Note) => {
				noteStore.addNote([...$noteStore, note])
			})
			.on(NOTE_ACTIONS.UPDATE_NOTE, (note: Note) => {
				noteStore.updateNote(note)
			})
			.on(NOTE_ACTIONS.DELETE_NOTE, (id: string) => {
				noteStore.removeNote(id)
			})
	})

	onDestroy(() => {
		io.socket('/notes').off()
	})

	$: if ($currentIdNote) {
		note = $noteStore.find((note) => note.id === $currentIdNote) || {
			title: '',
			description: '',
			done: false
		}
	}
</script>

<form on:submit|preventDefault={handleNote}>
	<input bind:value={note.title} type="text" placeholder="Title" />

	<input bind:value={note.description} type="text" placeholder="Description" />

	<label for="done">
		Done
		<input type="checkbox" bind:checked={note.done} name="done" />
	</label>
	<button>{loading ? 'loading' : $currentIdNote ? 'Update' : 'Save'}</button>
</form>

<style lang="scss">
	form {
		display: flex;
		gap: 20px;
		flex-direction: column;
		align-items: center;

		input {
			width: 60%;
			border: none;
			outline: none;
			padding: 5px;
			font-size: 18px;
			border-bottom: 2px solid black;
		}
		button {
			width: 60%;
			cursor: pointer;
			border: none;
			outline: none;
			padding: 5px;
			font-size: 18px;
		}
	}
</style>
