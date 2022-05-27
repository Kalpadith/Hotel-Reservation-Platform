const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

require('./db/connectDB')

const apiRoutes = require('./routes/apiRoutes')
const authRoutes = require('./routes/auth')
app.use("/register/users",apiRoutes)
app.use("/login/auth",authRoutes)

const port = process.env.PORT || 5000
app.listen(port,() =>{
    console.log(`service Users started on port ${port}`)
})