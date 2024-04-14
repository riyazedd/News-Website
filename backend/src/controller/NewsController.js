import News from "../models/News.js";

class NewsController{
    async index(req,res){
        try{
            const newsData= await News.find({});
            res.status(200).json(newsData);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }

    async store(req,res){
      
        try{
            let image="";
            if(req.file){
                image=req.file.filename;
            }
            await News.create({...req.body,image});
            res.status(200).json({message:'News created successfully'});
        }catch(err){
            res.status(500).json({message:err.message})
        }
    }

    async show(req,res){
        try{
            let id=req.params.id;
            const newsData= await News.findById(id);
            res.status(200).json(newsData);
        }catch(err){
            res.status(500).json({message:err.message})
        }
    }

    async update(req,res){
        try{
            let id=req.params.id;
            await News.findByIdAndUpdate(id,{...req.body})
            res.status(200).json({message: "News Updated Succesfully"});
        }catch(err){
            res.status(500).json({message:err.message})
        }
    }

    async destroy(req,res){
        try{
            let id=req.params.id;
            await News.findByIdAndDelete(id)
            res.status(200).json({message: "News Deleted Succesfully"});
        }catch(err){
            res.status(500).json({message:err.message})
        }
    }
}


export default NewsController;