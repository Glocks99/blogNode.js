const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

mongoose.connect(process.env.MONGO_DB_URL)
mongoose.connection
.once("open", () => console.log("mongodb connected"))
.on("err", (err)=> console.log(err))