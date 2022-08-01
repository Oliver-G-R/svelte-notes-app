import { catchError } from '../helpers/errors'
import type { FormNote, Note } from '../models/Notes'
import type { GenericResponse } from '../models/Response'
import { notesApi } from '../axios/index'

const createNote = async (note: FormNote): Promise<GenericResponse<Note>> => {
	try {
		const response = await notesApi.post<Note>('/notes', note)
		return {
			data: response.data
		}
	} catch (error) {
		return {
			error: catchError(error)
		}
	}
}

const getAllNotes = async (): Promise<GenericResponse<Note[]>> => {
	try {
		const response = await notesApi.get<Note[]>('/notes')
		return {
			data: response.data
		}
	} catch (error) {
		return {
			error: catchError(error)
		}
	}
}

const updateNote = async (id: string, note: FormNote): Promise<GenericResponse<Note>> => {
	try {
		const response = await notesApi.put<Note>(`/notes/${id}`, note)
		return {
			data: response.data
		}
	} catch (error) {
		return {
			error: catchError(error)
		}
	}
}

const removeNote = async (id: string): Promise<GenericResponse<{ message: string }>> => {
	try {
		const response = await notesApi.delete<{ message: string }>(`/notes/${id}`)
		return {
			data: response.data
		}
	} catch (error) {
		return {
			error: catchError(error)
		}
	}
}

export default {
	createNote,
	getAllNotes,
	updateNote,
	removeNote
}
