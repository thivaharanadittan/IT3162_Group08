const express = require("express");
const router  = express.Router();

const User=require('../models/user')
router.post('/register', async(req,res) =>{
    const newuser=new User(req.body);

    try {
        const user= await newuser.save()
        res.send('user registered succss')
    } catch (error) {
        return res.status(400).json({message:error});
    }
});
router.post('/login', async(req,res) =>{
    const {email,password}=req.body
    try {
        const user= await User.findOne({email,password});
        if(user){
            const temp = {
                name : user.name,
                email : user.email,
                EaseAdmin : user.EaseAdmin,
                _id : user._id
            }
            res.send(user)
        }
        else{
            return res.status(400).json({message : 'login failed'});
        }
    } catch (error) {
        return res.status(400).json({message:error});
    }
});
module.exports=router;