const cors = require('cors')
const express = require('express')
const {graphqlHTTP} = require('express-graphql')

const app = express()

const isAuth = require('./middleware/auth')
const graphqlSchema = require('./graphql/schema/index')
const graphqlResolver = require('./graphql/resolvers/index.js')
const Database = require('./database')

//settings
app.set('PORT', process.env.PORT || 4000)

//allow multi-cross 
app.use(cors())

app.use(isAuth)

app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}))

app.listen(app.get('PORT'), ()=>{
    console.log(`App in port: ${app.get('PORT')}`)
})

