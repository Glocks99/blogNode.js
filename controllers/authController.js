const authModel = require('../models/authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const errorHandler = require('../Errors/errorHandler')

const getsignup = (req,res)=>{
    res.render('signup')
}

const getlogin = (req,res)=>{
    res.render('login')
}

const postsignup = async(req,res)=>{
    try{
        const {email,password} = req.body
        console.log(req.body)
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new authModel({
            email:email,
            password: hashedPassword
        })
        newUser.save()
        .then(()=>{
            res.status(201).redirect('/login')
        })
        
        
    }
    catch(err){
        console.log(err)
    }
}

const postlogin = async(req,res)=>{
    try{
        const {email,password} = req.body
        const user = await authModel.findOne({email})
        if(user){
            const isPassword = await bcrypt.compare(password, user.password)
            if(isPassword){
                jwt.sign({id:user._ud}, process.env.JWT_SECRET, {}, (err,token)=>{
                    if(err){
                        console.log(err)
                        res.redirect('/signup')
                    }else{
                        res.cookie("token", token)
                        res.status(200).json({user: user})
                    }
                })
            }else{
                throw Errow("wrong password")
            }
        }else{
            throw Error("wrong email")
        }
    }
    catch(err){
        console.log(err)
        let errors = errorHandler(err)
        res.status(400).json({error: err})
    }
}

const logout = (req,res)=>{
    res.cookie("token", " ", {maxAge: 0})
    res.redirect('/login')
}

module.exports = {getlogin,getsignup,postsignup,postlogin,logout}