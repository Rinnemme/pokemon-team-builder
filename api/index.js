require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const pokemonRoutes = require('./routes/pokemon')
const teamRoutes = require('./routes/teams')
const typeRoutes = require('./routes/types')
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/', pokemonRoutes)
app.use('/teams', teamRoutes)
app.use('/pokemon', pokemonRoutes)
app.use('/types', typeRoutes)

//connect to Mongoose
mongoose.connect(process.env.MONGO_URI, {dbName: 'Pokemon-Team-Builder'})
    // .then(() => {
    //     app.listen(process.env.PORT, () => {
    //         console.log('connected & listening on port', process.env.PORT)
    //     })
    // })
    // .catch((error) => {
    //     console.log(error)
    // })

