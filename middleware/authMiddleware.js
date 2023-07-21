const jwt = require('jsonwebtoken')

const time = 60*60*24*2
async function permission(req,res,next){
    const token = req.cookiees
    if(token){
        await jwt.verify(token, process.env.JWT_SECRET, {expiresIn: time}, (err, verifiedToken)=>{
            if(err){
                res.redirect('/login')
            }
            else{
                next()
            }
        })
    }else{
        res.redirect('/login')
    }
}

module.exports = {permission}