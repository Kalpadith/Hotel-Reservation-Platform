const mongoose = require('mongoose')
const jwt =require('jsonwebtoken')
const joi = require('joi')
const passwordComplexity = require("joi-password-complexity")


const userSchema = new mongoose.Schema({
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
    phone:{
        type:Number,
        require:true,
        trim:true
    },password:{
        type:String,
        require:true,
        trim:true
    }
},{timestamps:true});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
    return token
};

const User = mongoose.model('User',userSchema)

const validate = (data) => {
    const schema = joi.object({
        name: joi.string().required().label("Name"),
        email: joi.string().email().required().label("Email"),
        phone: joi.number().required().label("Number"),
        password: passwordComplexity().required().label("Password")
    })
    return schema.validate(data)
}

module.exports = { User, validate };