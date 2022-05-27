const express = require('express')
const router = express.Router();

const {getHotels,  addHotels, updateHotels,  deleteHotels} = require('../controllers/controller')

router.get("/gethotels",getHotels)
router.post("/hotels",addHotels)
router.put("/hotels",updateHotels)
router.delete("/hotels", deleteHotels)




module.exports = router
