const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'get all pokemon'})
})

router.get('/:id', (req, res) => {
    res.json({mssg: 'get specific pokemon'})
})

module.exports = router