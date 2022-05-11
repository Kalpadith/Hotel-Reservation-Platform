// import express from 'express';
// import getrooms from '../controllers/roomcontroller.js'
const express = require('express')
const router = express.Router()

const {getrooms} =require('../controllers/roomcontroller')



router.get("/rooms",getrooms)

module.exports = router