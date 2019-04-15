import User from '../models/user'
import Order from '../models/order'

export default {
    Query: {
        user: async(_, { _id }) => {
            return await User.findById(_id).exec()
        },
        users: async() => {
            const users = await User.find()
            return users
        }
    },
    Mutation: {
        createUser: async(_, { input }) => {
            const user = new User(input)
            await user.save()
            return user
        },
        deleteUser: async(_, { _id }) => {
            return await User.findByIdAndDelete(_id)
        },
        updateUser: async(_, { _id, input }) => {
            return await User.findByIdAndUpdate(_id, input, { new: true })
        }
    },
    User: {
        orders: async({ _id }) => {
            return await Order.find({ user: _id })
        }
    }
}