interface Note {
	id: string
	title: string
	description: string
	done: boolean
}

type FormNote = Omit<Note, 'id'>

export type {
	Note,
	FormNote
}