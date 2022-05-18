const express = require('express')
const router = express.Router()

const {getOwners} = require('../controllers/controller.js')
const {addOwners} = require('../controllers/controller.js')

router.get("/owners" ,getOwners)
router.post("/" ,addOwners);

module.exports = router