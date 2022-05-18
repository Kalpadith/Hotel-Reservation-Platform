const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    hotel:{
        type:String,
        require:true,
        trim:true
    },password:{
        type:String,
        require:true,
        trim:true
    }
},{timestamps:true})

const Owner = mongoose.model('Owner',ownerSchema)
module.exports = Owner