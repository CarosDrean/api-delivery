import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    name: { type: String, required: true },
    imgUrl: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    stock: { type: Number }
})

export default model('Product', productSchema)