const express=require('express')
const router=express.Router();
const{VideoModel}=require("../models/VideoModel")

router.get("/",(req,res)=>{
    res.send("base video api")
})

router.post("/saved", async(req,res)=>{
    const{mediaBlobUrl,date}=req.body;
    const video=new VideoModel({videoUrl:mediaBlobUrl, recordedAt:date})
    await video.save();
})



module.exports=router;