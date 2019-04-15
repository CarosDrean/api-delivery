import Product from '../models/product'
import Category from '../models/category'

export default {
    Query: {
        product: async(_, { _id }) => {
            return await Product.findById(_id).exec()
        },
        products: async() => {
            const products = await Product.find().populate().exec()
            return products
        }
    },
    Mutation: {
        createProduct: async(_, { input }) => {
            const product = new Product(input)
            await product.save()
            return product
        },
        deleteProduct: async(_, { _id }) => {
            return await Product.findByIdAndDelete(_id)
        },
        updateProduct: async(_, { _id, input }) => {
            return await Product.findByIdAndUpdate(_id, input, { new: true })
        }
    },
    Product: {
        category: async({ category }) => {
            return await Category.findById({ _id: category })
        }
    }
}