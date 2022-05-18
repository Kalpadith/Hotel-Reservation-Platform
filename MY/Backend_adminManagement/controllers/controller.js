
const Admin = require('../models/Admins.js')
/*const getUsers = (req,res) =>{
    User.find()
    .then(data =>{
        return res.status(200).send({data:data})
    })
    .catch(err =>{
        return res.status(401).send({err:err})
    })
}*/

const getAdmins = async (req, res) => {
    await Admin.findOne({'email': req.params.email})
    .then((data) => {
        res.status(200).send({ data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  
}


const addAdmins = async (req, res) => {
    const { email, password} = req.body;

    const newadmin = new Admin({ email, password });

    try{
        await newadmin.save();

        res.status(201).json(newadmin );
    }catch (error){
        res.status(409).json({ message: error.message });
    }
}

module.exports = {
    getAdmins,
    addAdmins
}
