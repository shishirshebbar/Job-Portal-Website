import { Company } from "../models/company_model.js";

export const registercompany = async(req,res)=>{
    try{
        const {companyname}  = req.body;
        if(!companyname){
            return res.status(400).json({
                message:"Enter company name.",
                success:false
            })
        }let company = await Company.findOne({name:companyname});
        if(company){
            return res.status(400).json({
                message:"Same company name cannot cannot be registered.",
                success:false
            })
        }
        company = await Company.create({
            name:companyname,
            userId:req.id
        });
        return res.status(201).json({
            message:"Company registered successfully!!",
            company,
            success:true
        })

    }catch(error){
        console.log(error);

    }
}

export const getcompany = async(req,res)=>{
    try{
        const userId  = req.id;
        const companies = await Company.find({userId});
        if(!companies){
            return res.status(404).json({
                message:"Comapny not found.",
                success:false
            })
        }
        return res.status(200).json({
            companies,
            success:true
        })
    }catch(error){
        console.log(error);
    }
}

export const getcompanybyid = async(req,res)=>{
    try{
        const comapnyid = req.params.id;
        const company = await Company.findById(comapnyid);
        if(!company){
            return res.status(404).json({
                message:"Comapny not found.",
                success:false
            })
        }
        return res.status(200).json({
            company,
            success:true
        })

    }catch(error){
        console.log(error)
    }
}
export const updatecomapnyprofile = async(req,res)=>{
    try{
        const {name,description,website,location}=req.body;
        console.log(name,description,website,location);
        const file = req.file;
        const update = {name,description,website,location};
        const company = await Company.findByIdAndUpdate(req.params.id,update,{new:true});
        if(!company){
            return res.status(404).json({
                message:"Comapny not found.",
                success:false
            })
        }
        return res.status(200).json({
            message:"Comapny info updated successfully",
            success:true
        })

    }catch(error){
        console.log(error);
    }
}