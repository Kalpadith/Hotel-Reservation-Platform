// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')


const app = express();
dotenv.config();

app.use(cors())
app.use(express.json())

const apiRoomRoutes = require ('./routes/apiRoomRoutes')
const apiBookRoomRoutes = require ('./routes/apiBookRoomRoutes')
require ('./db/connectDB')

app.use("/api",apiRoomRoutes)
app.use("/api/book",apiBookRoomRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Service Rooms started on port ${PORT}`)
})