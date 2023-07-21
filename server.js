const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('./models/database')
const blogRoute = require('./routes/blogRoute')
const authroute = require('./routes/authroute')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const methodOverride = require('method-override')
const bcrypt = require('bcrypt')
const {permission} = require('./middleware/authMiddleware')

//middleware
app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))
app.use(blogRoute)
app.use(authroute)
app.use(express.static('public'))
app.use(express.json())
app.use(methodOverride("_method"))
app.use(cookieParser())


//Routes
app.get('/',permission,(req,res)=>{
    res.render('home')
})

app.all('*', (req,res)=>{
    res.send(`<h2> 404 PAGE </h2>`)
})

//port listening
const port = 3000
app.listen(port, ()=> console.log(`running on port: ${port}`))