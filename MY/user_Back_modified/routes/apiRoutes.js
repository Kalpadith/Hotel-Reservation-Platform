const express = require('express')
const router = express.Router()

const {getUsers} = require('../controllers/controller.js')
const {addUsers} = require('../controllers/controller.js')

router.get("/:email" ,getUsers)
router.post("/" ,addUsers);

module.exports = router