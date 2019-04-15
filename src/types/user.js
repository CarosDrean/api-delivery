export default `
    type User {
        _id: ID
        firstname: String!
        lastname: String
        phone: Int
        address: String
        orders: [Order]
    }

    input UserInput {
        firstname: String!
        lastname: String
        phone: Int
        address: String
    }

    type Query {
        user(_id: ID!): User
        users: [User]
    }

    type Mutation {
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
    }
`