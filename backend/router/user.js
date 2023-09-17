const express=require('express')
const jwt=require('jsonwebtoken')
const {UserModel}=require("../models/UserModel")
const bcryptjs=require('bcryptjs');
require("dotenv").config()


const router=express.Router();

router.get("/",(req,res)=>{
    res.send("baseuserapi")
})

router.post("/signup", async(req,res)=>{
    const{email,password}=req.body;
    const is_user= await UserModel.findOne({email:email})
    if(is_user)
    {
        res.send({msg:"Email already registered, signin"})
    }
    bcryptjs.hash(password,3, async function(err,hash){
        const new_user=new UserModel({
            email,
            password:hash,
        })
        await new_user.save()
        res.send({msg:"Signup Successful"})
    })

})

router.post("/login", async(req,res)=>{
    const{email,password}=req.body;
    const is_user= await UserModel.findOne({email:email})
    if(is_user)
{
    const hashed_pwd=is_user.password
    bcryptjs.compare(password,hashed_pwd, function(err,result){
        if(result)
        {
            const token=jwt.sign({userID:is_user._id},process.env.SECRET_KEY)
            res.send({msg:"Login Succesful", token:token})
        }
        else{
            res.send("Login Failed")
        }
    });
}
else{
    res.send("Signup First")
}


})

module.exports=router;