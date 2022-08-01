import type { Writable } from 'svelte/store'
import type { Note as NoteType } from '../models/Notes'
import { writable } from 'svelte/store'

interface INoteStore {
	subscribe: Writable<NoteType[]>['subscribe']
	addNote: (note: NoteType[]) => void
	removeNote: (id: string) => void
	updateNote: (note: NoteType) => void
	currentIdNote: Writable<string>
}

export const NoteStore = (): INoteStore => {
	const { subscribe, set, update } = writable<NoteType[]>([])
	const currentIdNote = writable<string>()

	const addNote = (note: NoteType[]) => set(note)

	const removeNote = (id: string) => update((notes) => notes.filter((note) => note.id !== id))

	const updateNote = (note: NoteType) =>
		update((notes) => notes.map((n) => (n.id === note.id ? note : n)))

	return {
		subscribe,
		addNote,
		removeNote,
		updateNote,
		currentIdNote
	}
}
