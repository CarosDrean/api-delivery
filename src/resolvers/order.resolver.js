import Order from '../models/order'
import Product from '../models/product'
import User from '../models/user'

export default {
    Query: {
        order: async(_, { _id }) => {
            return await Order.findById(_id).exec()
        },
        orders: async() => {
            const orders = await Order.find().populate().exec()
            return orders
        }
    },
    Mutation: {
        createOrder: async(_, { input }) => {
            const order = new Order(input)
            await order.save()
            return order
        },
        deleteOrder: async(_, { _id }) => {
            return await Order.findByIdAndDelete(_id)
        },
        updateOrder: async(_, { _id, input }) => {
            return await Order.findByIdAndUpdate(_id, input, { new: true })
        }
    },
    Order: {
        product: async({ product }) => {
            return await Product.findById({ _id: product })
        },
        user: async({ user }) => {
            return await User.findById({ _id: user })
        }
    }
}