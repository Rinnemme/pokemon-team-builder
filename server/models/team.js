const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teamSchema = new Schema({
    name: {type: String},
    members: [{type: Schema.Types.ObjectId, ref: "Pokemon"}]
})

module.exports = mongoose.model('Team', teamSchema, 'Teams')