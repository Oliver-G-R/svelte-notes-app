import axios from 'axios'

export const notesApi = axios.create({
	baseURL: 'http://localhost:3000'
})
