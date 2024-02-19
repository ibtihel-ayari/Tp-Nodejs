const express =require ("express");
const register = express.Router();

//create instance of express
register.get('/auth/register',(req, res)=>(
    res.sendFile(__dirname+'/register.html')
))
module.exports= register;