const rooms =require ('../models/rooms.js')
const router = require("express").Router();


const getrooms = async(req,res) =>{

    try{
        const data = await rooms.find()
        
        return res.status(200).json({
            success: true,
            data:data
        })
    }
    catch(error){
        return res.status(500).send({error:error})
    }
}

// module.exports= {
//     getrooms
// }

const addrooms = async (req, res) => {
    const {hotel_name, room_id, room_name, room_type, guests,price,size} = req.body;

    const newrooms = new rooms({hotel_name, room_id, room_name, room_type, guests,price,size})

    try {
        await newrooms.save();

        res.status(201).json(newrooms );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

module.exports= {
    addrooms,
    getrooms
}

// router.route('/iinsert').post((req,res) =>{

//     let newIncome = new Income(req.body);

//     newIncome.save((err) => {
//         if(err){
//             return res.status(400).json({
//                 error:err
//             });
//         }
//         return res.status(200).json({
//             success:"Income saved Successfully"
//         });
//     });
// });