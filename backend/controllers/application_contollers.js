import { Application } from "../models/appplication_model.js";
import { Job } from "../models/job_model.js";

export const applyforjob= async(req,res)=>{
    try{
        const userId = req.id;
        const jobid = req.params.id;
        if(!jobid){
            return res.status(400).json({
                message:"Job id is required",
                success:false
            })
        };
        const applicationexists = await Application.findOne({
            job:jobid,
            applicant:userId
        })
        if(applicationexists){
            return res.status(400).json({
                message:"You have already applied for this particular job.",
                success:false
            })
        }
        //check if the job exists
        const job = await Job.findById(jobid);
        if(!job){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        }
        //create a new application
        const newapplication = await Application.create({
            job:jobid,
            applicant:userId
        })
        job.applications.push(newapplication._id);
        await job.save();
        return res.status(201).json({
            message:"Job applied successfully!!",
            success:true
        })

    }catch(error){
        console.log(error);
    }
}

export const getappliedjobs = async(req,res)=>{
    try{
        const userId = req.id;
        const application  = await Application.find({
            applicant:userId
        }).sort({
            createdAt:-1
        }).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}},
            }
        })
        if(!application){
            return res.status(404).json({
                message:"Applications not found",
                success:false
            })
        }
        return res.status(200).json({
            application,
            success:true
        })


    }catch(error){
        console.log(error);
    }
}
//for admin
export const getapplicants = async(req,res)=>{
    try{
        const jobid = req.params.id;
        const job = await Job.findById(jobid).populate({
            path:"applications",
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        })
        if(!job){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        }

        return res.status(200).json({
            job,
            success:true
        })

    }catch(error){
        console.log(error);
    }

} 

export const updateapplicationstatus = async(req,res)=>{
    try{
        const {status}=req.body;
        const applicationid = req.params.id;
        if(!status){
            return res.status(400).json({
                message:"Status is required",
                success:false
            })

        }//find application by aplication id
        const application = await Application.findOne({
            _id:applicationid
        })
        if(!application){
            return res.status(404).json({
                message:"Application not found",
                success:false
            })

        }
        application.status = status.toLowerCase();
        await application.save();
        return res.status(200).json({
            message:"Status updated!!",
            success:true
        })

    }catch(error){
        console.log(error);
    }
}