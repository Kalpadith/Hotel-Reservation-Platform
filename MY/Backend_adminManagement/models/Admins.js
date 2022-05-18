const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    
    email:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    
    password:{
        type:String,
        require:true,
        trim:true
    }
},{timestamps:true})

const Admin = mongoose.model('Admin',adminSchema)
module.exports = Admin