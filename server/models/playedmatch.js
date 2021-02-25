const mongoose = require('mongoose')

const Schema = mongoose.Schema
const rmSchema = new Schema({
    matchid:Number,
    name:String,
    robotmaster:String,
    frags:Number,
    wins:Number,
    loss:Number,
    placement:Number

})

module.exports = mongoose.model('playedmatch',rmSchema,'playedmatches')