
// const User = require('../models/Users.js')
// /*const getUsers = (req,res) =>{
//     User.find()
//     .then(data =>{
//         return res.status(200).send({data:data})
//     })
//     .catch(err =>{
//         return res.status(401).send({err:err})
//     })
// }*/

// const getUsers = async (req, res) => {
//     await User.findOne({'email': req.params.email})
//     .then((data) => {
//         res.status(200).send({ data });
//       })
//       .catch((err) => {
//         res.status(500).send(err);
//       });
  
// }


// const addUsers = async (req, res) => {
//     const { name, email, phone, password} = req.body;

//     const newuser = new User({name, email, phone, password });

//     try{
//         await newuser.save();

//         res.status(201).json(newuser );
//     }catch (error){
//         res.status(409).json({ message: error.message });
//     }
// }

// module.exports = {
//     getUsers,
//     addUsers
// }
