import jwt, { decode } from "jsonwebtoken";


const authenticate = async(req,res,next)=>{
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                message:"User not authenticated",
                success:false
            })
        }
        const decode = await jwt.verify(token,process.env.SECRET_KEY)
        if(!decode){
            return res.status(401).json({
                messgae:"Token is invalid",
                success:false
            })
        };
        req.id= decode.userid;
        next();
        
    }catch(error){
        comsole.log(error)
    }
}

export default authenticate;