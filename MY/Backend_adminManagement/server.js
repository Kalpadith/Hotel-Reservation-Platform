const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

require('./db/connectDB')

const apiRoutes = require('./routes/authAdmin')
app.use("/logina/authAdmin",apiRoutes)

const port = process.env.PORT || 5000
app.listen(port,() =>{
    console.log(`service Admins started on port ${port}`)
})