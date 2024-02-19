const express =require ("express");

//create instance of express
const loginrouter = express.Router();

loginrouter.get('/login',(req, res)=>(
    res.send('<h1>welcome to the club</h1>')
))
module.exports= loginrouter;