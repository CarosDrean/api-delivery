import Category from '../models/category'

export default {
    Query: {
        category: async(_, { _id }) => {
            return await Category.findById(_id).exec()
        },
        categorys: async() => {
            const categorys = await Category.find()
            return categorys
        }
    },
    Mutation: {
        createCategory: async(_, { input }) => {
            const category = new Category(input)
            await category.save()
            return category
        },
        deleteCategory: async(_, { _id }) => {
            return await Category.findByIdAndDelete(_id)
        },
        updateCategory: async(_, { _id, input }) => {
            return await Category.findByIdAndUpdate(_id, input, { new: true })
        }
    }
}