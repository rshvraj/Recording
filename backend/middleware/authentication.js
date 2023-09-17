const jwt= require("jsonwebtoken")
require("dotenv").config()

const authentication= (req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];
    if(!token)
    {
        return res.status(401).json({msg:"Please login first"});
    }
    jwt.verify(token, process.env.SECRET_KEY, (err,decoded)=>{
        if(err){
            return res.status(401).json({msg:"Token Invalid"});


        }
        else{
            console.log("decoded");
            const {userID}=decoded;
            req.userID=userID;
            next();
        }
    });
}
module.exports={authentication};