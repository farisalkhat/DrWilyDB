const mongoose = require('mongoose')

const Schema = mongoose.Schema
const rmSchema = new Schema({
    name:String,
    origin:String,
    primaryclass:String,
    secondaryclass:String,
    icon:String,
    image:String
})

module.exports = mongoose.model('robotmaster',rmSchema,'robotmasters')