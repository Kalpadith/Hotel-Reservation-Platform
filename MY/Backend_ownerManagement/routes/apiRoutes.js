const express = require('express')
const router = express.Router()
const { User, validate, Owner } = require('../models/Owners.js')
const bcrypt = require('bcrypt')




router.post("/" ,async (req, res) => {
    try{
        const {error} = validate(req.body);
        if(error)
            return res.status(400).send({message: error.details[0].message })
            const user = await Owner.findOne({email: req.body.email })
            if(user)
                return res.status(409).send({message: "User already exist"})
            
            const salt = await bcrypt.genSalt(Number(process.env.SALT));
            const hashPassword = await bcrypt.hash(req.body.password, salt);
                
            await new Owner({...req.body, password: hashPassword}).save();
            res.status(201).send({message: "User created"})

        
    }catch (error){
        res.status(500).send({message: "server error"});
    }
});

module.exports = router