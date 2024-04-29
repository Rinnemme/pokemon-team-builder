const Type = require('../models/type')
const Pokemon = require('../models/pokemon')

exports.listTypes = async (req, res) => {
    try {
        const types = await Type.find({})
        res.status(200).json(types)
    } catch (error) {
        res.status(400).son({error: error.message})
    }
}

exports.findPokemonOfType = async (req, res) => {
    try {
        const targetType = await Type.findOne({name: req.params.name})
        const targetId = targetType.id
        const typeList = await Pokemon.find({type: targetId}).populate('type')
        console.log(typeList.length)
        res.status(200).json(typeList)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}