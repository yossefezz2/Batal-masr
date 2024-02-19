var jwt = require('jsonwebtoken');
const {resGenerator}= require('../helper')
const sharedService = require('../../services/shared.js')
const userMiddleware= async (req,res,next)=>{
    try {

        const token = req.header("authorization").replace("Bearer ","")
        console.log(token);
        let decoded = jwt.verify(token,process.env.jwtKey)
        // console.log(decoded);
        const user =await sharedService.checkToken(token,decoded)
        if(!user[0])  throw new Error("invalid auth")

        req.user = user[0]
        req.token = token

        next()
        
    } catch (error) {
        resGenerator(res, 500, false, error.message , "invalid auth")
    }
}
const isAdmin= async (req,res,next)=>{
    try {

        if (req.user.type != "admin") throw new Error("not authorized admin")

        next()
        
    } catch (error) {
        resGenerator(res, 500, false, error.message , "invalid auth")
    }
}
module.exports = {userMiddleware,isAdmin}