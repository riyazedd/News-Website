class UserController{
    async index(req,res){
        res.send("All Users")
    }

    async show(req,res){
        res.send("Single User")
    }

    async store(req,res){
        res.send("User Store")
    }

    async update(req,res){
        res.send("User Updated")
    }

    async destroy(req,res){
        res.send("User Deleted")
    }
}

export default UserController;