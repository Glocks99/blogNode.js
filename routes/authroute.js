const {getlogin,getsignup,postsignup,postlogin,logout} = require('../controllers/authController')
const router = require('express').Router()

router.get('/signup', getsignup)

router.get('/login', getlogin)

router.post('/postsignup', postsignup)

router.post('/postlogin', postlogin)

router.get("/logout", logout)


module.exports = router