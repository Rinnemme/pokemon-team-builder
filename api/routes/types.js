const express = require('express')
const router = express.Router()
const typeController = require('../controllers/typeController')

router.get('/', typeController.listTypes)

router.get('/:name', typeController.findPokemonOfType)

module.exports = router