require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const pokemonRoutes = require('./routes/pokemon')
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/pokemon', pokemonRoutes)

//connect to Mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

