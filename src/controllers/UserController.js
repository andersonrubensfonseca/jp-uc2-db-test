const UserService = require("../services/UserService");


class UserController{
    constructor(){
    }
    async index(req,res){
        const userService = new UserService();
        const lista = await userService.listarUsuarios();

        return res.json({users:lista})
    }
}


module.exports = new UserController()