import { Schema, model } from 'mongoose'

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    priceUnit: { type: Number, required: true }
})

export default model('Order', orderSchema)