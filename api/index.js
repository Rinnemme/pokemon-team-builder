require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const pokemonRoutes = require('./routes/pokemon')
const teamRoutes = require('./routes/teams')
const typeRoutes = require('./routes/types')
const app = express()

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})
app.use(cors({origin: ["https://pokemon-team-builder-usjx.vercel.app", "http://localhost:3000"]}))

// return a basic home page
app.get('/', (req, res) => {
    res.json({mssg: 'Home!'})
})

//routes
app.use('/teams', teamRoutes)
app.use('/pokemon', pokemonRoutes)
app.use('/types', typeRoutes)

//connect to Mongoose
mongoose.connect(process.env.MONGO_URI, {dbName: 'Pokemon-Team-Builder'})
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

