const mongoose = require('mongoose')

const Schema = mongoose.Schema
const rmSchema = new Schema({
    name:String,
    origin:String,
    image:String
})

module.exports = mongoose.model('stage',rmSchema,'stages')