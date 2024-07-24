const UserRepository = require('../repositories/UserRepository')


class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async listarUsuarios(){
        return await this.userRepository.listar();
    }

    async cadastrarUsuario(dados){
        return await this.userRepository.criar(dados);
    }
}

module.exports = UserService