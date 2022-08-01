import { Manager } from 'socket.io-client'
const URL = 'http://localhost:3000'

const socket = new Manager(URL)

export const io = socket
