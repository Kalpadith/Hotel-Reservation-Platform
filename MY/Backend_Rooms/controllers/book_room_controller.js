const book_rooms =require ('../models/book_rooms.js')
const router = require("express").Router();


const getrooms = async(req,res) =>{

    try{
        const data = await rooms.find()
        
        return res.status(200).send({
            data:data,
            existingrooms: rooms
        })
    }
    catch(error){
        return res.status(500).send({error:error})
    }
}

module.exports= {
    getrooms
}

const bookrooms = async (req, res) => {
    const {from_date, to_date, full_name, phone_number, nic,address,email} = req.body;

    const bookrooms = new book_rooms({from_date, to_date, full_name, phone_number, nic,address,email})

    try {
        await bookrooms.save();

        res.status(201).json(bookrooms );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

module.exports= {
    bookrooms
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