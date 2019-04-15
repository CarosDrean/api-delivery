export default `
    type Product {
        _id: ID
        name: String!
        category: Category
        imgUrl: String
        price: Float
        description: String
        stock: Int
    }

    input ProductInput {
        name: String!
        category: ID
        imgUrl: String
        price: Float
        description: String
        stock: Int
    }

    type Query {
        product(_id: ID!): Product
        products: [Product]
    }

    type Mutation {
        createProduct(input: ProductInput): Product
        deleteProduct(_id: ID): Product
        updateProduct(_id: ID, input: ProductInput): Product
    }
`