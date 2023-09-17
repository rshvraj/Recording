const mongoose=require("mongoose")

const videoSchema=mongoose.Schema({
    videoUrl: {type:String, required:true},
    audioUrl: String,
    recordedAt: {type:Date, required:true},
    user_id:{type:String, required:true}



})


const VideoModel=mongoose.model("video",videoSchema)
module.exports={
    
    VideoModel}