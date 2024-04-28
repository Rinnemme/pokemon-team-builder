const Team = require('../models/team')

exports.createTeam = async (req, res) => {
    const {name, creator, members} = req.body
    try {
        const team = await Team.create({name, creator, members})
        res.status(200).json(team)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

exports.listTeams = async (req, res) => {
    try {
        const teams = await Team.find({}).populate('members')
        res.status(200).json(teams)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}