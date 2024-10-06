import { Job } from "../models/job_model";
export const jobpost =async(req,res)=>{
    try{
        const {title,description,requirements,salary,location,jobtype,experiencelevel,position,company} = req.body;
        const userId = req.id;
        if(!title||!!description||!requirements||!salary||!location||!jobtype||!!experiencelevel||!position||!company){
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
            company,
            created_by:userId
        });
        return res.status(201).json({
            message:"Job created successfully!",
            job,
            success:true
        })
    }catch(error){
        console.log(error);
    }
}

