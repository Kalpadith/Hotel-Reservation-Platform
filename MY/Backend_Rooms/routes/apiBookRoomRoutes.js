// import express from 'express';
//import getrooms from '../controllers/roomcontroller.js'
//import addrooms from '../controllers/roomcontroller.js'
const {bookrooms} =require('../controllers/book_room_controller')


const express = require('express')
const router = express.Router()




router.get("/getbookrooms",bookrooms)
router.post("/addbookrooms",bookrooms)

module.exports = router