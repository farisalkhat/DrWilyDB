const mongoose = require('mongoose')

const Schema = mongoose.Schema
const rmSchema = new Schema({
    name:String,
    sequence_value:Number
})

module.exports = mongoose.model('counter',rmSchema,'counters')