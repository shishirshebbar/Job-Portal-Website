import { User } from "../models/user_models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register =async(req,res)=>{
    try{
        const {fullname,email,phonenumber,password,role}=req.body;
        console.log(fullname,email,phonenumber,password,role);
        if(!fullname||!email||!phonenumber||!password||!role){
            return res.status(400).json({
                message:"Required fields are missing",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"User already existss.",
                success:false
            })
        }
        const hashedpassword = await bcrypt.hash(password,10);
        await User.create({
            fullname,
            email,
            phonenumber,
            password:hashedpassword,
            role,
        })
        return res.status(201).json({
            message:"Account created successfully",
            success:true
        })
    }catch(error){
        console.log(error)

    }
}

export const login = async(req,res)=>{
    try{
        const {email,password,role} = req.body;
        if(!email||!password||!role){
            return res.status(400).json({
                message:"Required fields are missing",
                success:false
            })
        }
        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message:"Incorrect email",
                success:false
            })
        }
        const ifpasswordmatches= await bcrypt.compare(password,user.password);
        if(!ifpasswordmatches) {
            return res.status(400).json({
                message:"Incorrrect password",
                success:false
            })
        }
        if(role!==user.role){
            return res.status(400).json({
                message:"Account does not exist.",
                success:false
            })
        }
        const tokendata = {
            userid:user._id
        }
        const token =  await jwt.sign(tokendata,process.env.SECRET_KEY,{ expiresIn:'1d' })
        user = {
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phonenumber:user.phonenumber,
            role:user.role,
            profile:user.profile
        }
        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpsOnly:true,sameSite:'strict'}).json({
            message:`Welcome ${user.fullname}.`,
            user,
            success:true

        })
    }catch(error){
        console.log(error)
    }
}
export const logout = async(req,res)=>{
    try{
        return res.status(200).cookie("token","",{maxage:0}).json({
            message:`Logged out successfully`,
            success:true
        })
        

    }catch(error){
        console.log(error);
    }
}

export const  updateprofile = async(req,res)=>{
    try{
        const {fullname,email,phonenumber,biography,skills}= req.body;
        const file = req.file;
        let skillslist;
        if(skills){
            skillslist = skills.split(",");
        }
        const userid =  req.id;
        let user = await User.findById(userid);
        if(!user){
            return res.status(400).json({
                message:`User not found`,
                success:false
            })
        } 
        //update data
        if(fullname)user.fullname=fullname
        if(email)user.email = email
        if(phonenumber)user.phonenumber = phonenumber
        if(biography)user.profile.biography=biography
        if(skills)user.profile.skills = skillslist
        await user.save();
        user = {
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phonenumber:user.phonenumber,
            role:user.role,
            profile:user.profile
        }
        return res.status(200).json({
            messsage:"profile updated successfully",
            user,
            success:true
        })
    }catch(error){
        console.log(error);
    }
}