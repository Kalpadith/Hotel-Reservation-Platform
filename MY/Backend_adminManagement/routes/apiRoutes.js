const express = require('express')
const router = express.Router()

const {getAdmins} = require('../controllers/controller.js')
const {addAdmins} = require('../controllers/controller.js')

router.get("/:email" ,getAdmins)
router.post("/" ,addAdmins);

module.exports = router