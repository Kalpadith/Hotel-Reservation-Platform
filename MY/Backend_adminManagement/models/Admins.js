const mongoose = require('mongoose')
const jwt =require('jsonwebtoken')
const joi = require('joi')
const passwordComplexity = require("joi-password-complexity")


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        trim:true
    },
    
    password:{
        type:String,
        require:true,
        trim:true
    }
},{timestamps:true});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"})
    return token
};

const Admin = mongoose.model('Admin',userSchema)

const validate = (data) => {
    const schema = joi.object({
        
        email: joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    })
    return schema.validate(data)
}

module.exports = { Admin, validate };