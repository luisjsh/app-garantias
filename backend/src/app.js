const cors = require('cors')
const express = require('express')
const multer = require('multer')
const path = require('path')
const {v1} = require('uuid')
const {ApolloServer} = require('apollo-server-express')
const app = express()

const isAuth = require('./middleware/auth')
const typeDefs = require('./graphql/schema/index')
const resolvers = require('./graphql/resolvers/index.js')
const Database = require('./database')



//settings
app.set('PORT', process.env.PORT || 4000)

//allow multi-cross 
app.use(cors())
const storage = multer.diskStorage({
    destination: path.join(__dirname, "public/img/uploads"),
    filename: (req, file, cb, filename) => {
      cb(null, v1() + path.extname(file.originalname));
    }
  });
app.use(multer({ storage: storage }).array("image", 10));

app.use(isAuth)

app.use('/file', require('./routes/images.routes'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({req})=>{
    let {isAuth, userId} = req
    return {
      isAuth,
      userId
    }
  }
})

server.applyMiddleware({app})

app.listen(app.get('PORT'), ()=>{
    console.log(`App in port: ${server.graphqlPath}`)
})

