// import express from 'express';
// import gettaxis from '../controllers/taxicontroller.js'
const express = require('express')
const router = express.Router()

const {gettaxis} =require('../controllers/taxicontroller')
const {posttaxis} =require('../controllers/taxicontroller')

router.get("/gettaxi",gettaxis)
router.post("/addtaxi",posttaxis)

module.exports = router