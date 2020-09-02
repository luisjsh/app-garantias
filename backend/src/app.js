const cors = require('cors')
const express = require('express')
const multer = require('multer')
const path = require('path')
const {v1} = require('uuid')
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
const storage = multer.diskStorage({
    destination: path.join(__dirname, "public/img/uploads"),
    filename: (req, file, cb, filename) => {
      cb(null, v1() + path.extname(file.originalname));
    }
  });
app.use(multer({ storage: storage }).array("image", 10));

app.use(isAuth)

app.use('/file', require('./routes/images.routes'));

app.use('/graphql',
    graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}))

app.listen(app.get('PORT'), ()=>{
    console.log(`App in port: ${app.get('PORT')}`)
})

