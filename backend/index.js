const express= require("express");
const {connection} = require("./config/db")
const app=express();
require("dotenv").config()
const userRoutes=require("./router/user")
const videoRoutes=require("./router/video")
const cors = require('cors');
app.use(cors());
const{VideoModel}=require("./models/VideoModel")
const{authentication}=require("./middleware/authentication")
app.use(express.json())
app.get("/" ,(req,res)=>{
res.send("Base Api Test")
})
app.use("/users",userRoutes)

app.use(authentication)

app.get("/video" ,(req,res)=>{
res.send("video ")
})
app.post("/saved", async(req,res)=>{
    const userID=req.userID
    const{mediaBlobUrl,recordedTime,videoType}=req.body;
    const video=new VideoModel({
        videoUrl:mediaBlobUrl,
        recordedAt:recordedTime,
        videoType:videoType,
        user_id:userID
    })
    await video.save();
    
})
app.listen(8000,async ()=>{
    try{
        await connection
        console.log("connected to db successfully")
    }
    catch(err){
        console.log("error while connecting to DB")
        console.log(err)
    }
 
    console.log("listening on port 8000")
})