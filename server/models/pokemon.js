const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pokemonSchema = new Schema({
    name: {type: String, required: true},
    type: [{type: Schema.Types.ObjectId, ref: 'Type', required: true}],
    hp: {type: Number, required: true},
    attack: {type: Number, required: true},
    defense: {type: Number, required: true},
    spAtk: {type: Number, required: true},
    spDef: {type: Number, required: true},
    speed: {type: Number, required: true},
    generation: {type: Number, required: true},
    image: {type: String, required: true}
})

module.exports = mongoose.model('Pokemon', pokemonSchema)

