export default `
    type Order {
        _id: ID
        user: User!
        product: Product
        quantity: Int
        priceUnit: Float
    }

    input OrderInput {
        user: ID!
        product: ID
        quantity: Int
        priceUnit: Float
    }

    type Query {
        order(_id: ID!): Order
        orders: [Order]
    }

    type Mutation {
        createOrder(input: OrderInput): Order
        deleteOrder(_id: ID): Order
        updateOrder(_id: ID, input: OrderInput): Order
    }
`