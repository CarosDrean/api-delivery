import express from 'express';
import graphqlHTTP from 'express-graphql'
import cors from 'cors';
import schema from './schema';
import { connect } from './database'
import { PORT } from './config'

const app = express()
connect()

app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido!'
    })
})

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))

app.listen(PORT, () => {
    console.log('Server online!')
})