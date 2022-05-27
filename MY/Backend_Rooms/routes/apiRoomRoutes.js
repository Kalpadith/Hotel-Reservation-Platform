// import express from 'express';
//import getrooms from '../controllers/roomcontroller.js'
//import addrooms from '../controllers/roomcontroller.js'
const {getrooms} =require('../controllers/roomcontroller')
const {addrooms} =require('../controllers/roomcontroller')

const express = require('express')
const router = express.Router()




router.get("/getrooms",getrooms)
router.post("/addrooms",addrooms)

module.exports = router