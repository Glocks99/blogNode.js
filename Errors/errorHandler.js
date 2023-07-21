
module.exports = function errorHandler(err){
    let errors ={email:"", password:""}
    if(err.message === "wrong email"){
        errors.email = "Enter a valid email"
        return errors
    }

    if(err.message === "wrong password"){
        errors.password = "password is incorrect"
        return errors
    }
    return errors
}
