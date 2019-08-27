const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// allow cross-origin requests
app.use(cors)

app.use('/graphql', graphqlHTTP({
  schema, // schema: schema ES6 property
  graphiql: true
}))

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ik2mz.mongodb.net/book-app?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
).then(() => {
  app.listen(4000, () => {
    console.log('now listening for requests on port 4000 and connected to database')
  })
})
.catch(err => console.log)
