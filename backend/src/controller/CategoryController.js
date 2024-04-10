import Category from "../models/Category.js";

class CategoryController{
    async index(req,res){
        try{
            const catData= await Category.find({});
            res.status(200).json(catData);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }

    async store(req,res){
        try{
            await Category.create({...req.body});
            res.status(200).json({message:'Category created successfully'});
        }catch(err){
            res.status(500).json({message:err.message})
        }
    }

    async show(req,res){
        try{
            let id=req.params.id;
            const catData= await Category.findById(id);
            res.status(200).json(catData);
        }catch(err){
            res.status(500).json({message:err.message})
        }
    }

    async update(req,res){
        try{
            let id=req.params.id;
            await Category.findByIdAndUpdate(id,{...req.body})
            res.status(200).json({message: "Category Updated Succesfully"});
        }catch(err){
            res.status(500).json({message:err.message})
        }
    }

    async destroy(req,res){
        try{
            let id=req.params.id;
            await Category.findByIdAndDelete(id)
            res.status(200).json({message: "Category Deleted Succesfully"});
        }catch(err){
            res.status(500).json({message:err.message})
        }
    }
}


export default CategoryController;