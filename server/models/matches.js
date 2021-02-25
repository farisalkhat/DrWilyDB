const mongoose = require('mongoose')

const Schema = mongoose.Schema
const rmSchema = new Schema({
    matchid:Number,
    gametitle:String,
    gamemode:String,
    stage:String,
    totalplayers:Number,
    date:String

})

module.exports = mongoose.model('match',rmSchema,'matches')