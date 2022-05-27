// const Owner = require('../models/Owners.js')
// const getOwners = (req,res) =>{
//     Owner.find()
//     .then(data =>{
//         return res.status(200).send({data:data})
//     })
//     .catch(err =>{
//         return res.status(401).send({err:err})
//     })
// }

// const addOwners = async (req, res) => {
//     const { name, email, hotel, password} = req.body;

//     const newowner = new User({name, email, hotel, password });

//     try{
//         await newowner.save();

//         res.status(201).json(newowner );
//     }catch (error){
//         res.status(409).json({ message: error.message });
//     }
// }

// module.exports = {
//     getOwners,
//     addOwners
// }