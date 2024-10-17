import { Job } from "../models/job_model.js";
//admin post
export const jobpost =async(req,res)=>{
    try{
        const {title,description,requirements,salary,location,jobtype,experiencelevel,position,companyid} = req.body;
        const userId = req.id;
        if(!title||!description||!requirements||!salary||!location||!jobtype||!experiencelevel||!position||!companyid){
            return res.status(400).json({
                message:"Required fields are missing",
                success:false
            })
        };
        const job = await Job.create({
            title,
            description,
            requirements:requirements.split(","),
            salary:Number(salary),
            location,
            jobtype,
            experiencelevel,
            position,
            company:companyid,
            created_by:userId
        })
        //add if(jobs){message:job already exisits} if needed
        return res.status(201).json({
            message:"Job created successfully!",
            job,
            success:true
        })
    }catch(error){
        console.log(error);
    }
}
//student
export const getalljobs=async(req,res)=>{
    try{
        const keyword = req.query.keyword||"";
        const query={
            //"i"-case insensitive
            $or:[
                {title:{$regex:keyword,$options:"i"}},
                {description:{$regex:keyword,$options:"i"}}
            ]
        }
        const jobs= await Job.find(query).populate({
            path:"company"
        }).sort({createdAt:-1});//sorts the latest created job
        if(!jobs){
            return res.status(400).json({
                message:"Jobs not found",
                success:false
        })}
        return res.status(200).json({
            jobs,
            success:true
        })
    }catch(error){
        console.log(error);
    }
}
//student
export const getjobbyid = async(req,res)=>{
    try{
        const jobid= req.params.id;
        const job = await Job.findById(jobid).populate({
            path:"applications"
        })
        if(!job){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        }
        return res.status(200).json({job,success:true});


    }catch(error){
        console.log(error);
    }
}
//admin
export const getadminjobs = async(req,res)=>{
    try{
        const adminid = req.id;
        const jobs = await Job.find({created_by:adminid})
        if(!jobs){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        }
        return res.status(200).json({jobs,success:true});


    }catch(error){
        console.log(error);

    }
}