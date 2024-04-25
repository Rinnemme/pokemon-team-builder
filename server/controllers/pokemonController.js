const Pokemon = require('../models/pokemon')

exports.getAllPokemon = async(req,res) => {
    const pokemon = await Pokemon.find({}).sort({pokedexNumber: 1})
    res.status(200).json(pokemon)
}

exports.getOnePokemon = async(req,res) => {
    // const pokemon = await Pokemon.findById(req.params.id)
    const pokemon = await Pokemon.find({name: req.params.name})
    if (!pokemon.length) return res.status(404).json({error: 'No such pokemon'})
    else res.status(200).json(pokemon)
}