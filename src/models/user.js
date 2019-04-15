import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: Number, required: true },
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
    address: { type: String }
})

export default model('User', userSchema)