<script lang="ts">
	import type { FormNote } from "../models/Notes";
	import noteService from "../services/Notes";
	import { noteStore } from "../store";
	
	let note: FormNote = {
		title: "",
		description: "",
		done: false, 
	};

	let loading = false;
	let error: string | undefined = undefined;
	
	const { currentIdNote } = noteStore

	const saveNote = async () => {
		const response = await noteService.createNote(note)
		if (response.data) {
			noteStore.addNote([...$noteStore, response.data])
		} else {
			error = response.error?.message
		}
	};

	const updateNote = async () => {
		const response = await noteService.updateNote($currentIdNote, note)
		
		if (response.data) {
			noteStore.updateNote(response.data)
		} else {
			error = response.error?.message
		}
	};

	$: if ($currentIdNote) {
		note = $noteStore.find((note) => note.id === $currentIdNote) || {
			title: "",
			description: "",
			done: false,
		};
	}

	const handleNote = async() => {
		loading = true;
		if ($currentIdNote) {
			await updateNote()
		} else {
			await saveNote()
		}
		loading = false;
		note = {
			title: "",
			description: "",
			done: false,
		}
		currentIdNote.set("")

	};
</script>

<form on:submit|preventDefault={handleNote}>
	<input bind:value={note.title} type="text" placeholder="Title" />
	
	<input 
		bind:value={note.description} 
		type="text" 
		placeholder="Description" />
	
	<label for="done">
		Done
		<input  
			type="checkbox"
			bind:checked={note.done}
			name="done">
	</label>
	<button>{loading ? "loading" : $currentIdNote ? "Update" : "Save"}</button>
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
