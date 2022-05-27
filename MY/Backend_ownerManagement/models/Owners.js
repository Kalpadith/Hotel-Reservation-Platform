const mongoose = require('mongoose')
const jwt =require('jsonwebtoken')
const joi = require('joi')
const passwordComplexity = require("joi-password-complexity")


const ownerSchema = new mongoose.Schema({
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
},{timestamps:true});

ownerSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
    return token
};

const Owner = mongoose.model('Owner',ownerSchema)

const validate = (data) => {
    const schema = joi.object({
        name: joi.string().required().label("Name"),
        email: joi.string().email().required().label("Email"),
        hotel: joi.string().required().label("Hotel"),
        password: passwordComplexity().required().label("Password")
    })
    return schema.validate(data)
}

module.exports = { Owner, validate };
