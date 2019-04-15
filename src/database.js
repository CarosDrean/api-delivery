import mongoose from 'mongoose'
import { MONGO_URI } from './config'

export function connect() {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true
    })
    .then(() => console.log('DB is conected!'))
    .catch(() => console.log('Error al conectarse a base de datos!'))
}