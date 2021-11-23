const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playersModel = new Schema({
    name: {type: String, required:true},
    number: {type:String},
    imgUrl: {type:String},
    nationality: {type:String},
    position: {type:String},
}, {timestamps:true})

module.exports = mongoose.model('player', playersModel)