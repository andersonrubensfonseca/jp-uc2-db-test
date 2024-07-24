const { PrismaClient } = require('@prisma/client');



class BaseRepository{
    
    constructor(model){
        this.prisma = new PrismaClient();
        this.model = model
    }

    async listar(){
        console.log(this.model)
        return await this.prisma[this.model].findMany()
    }

    async criar(data){
        return await this.prisma[this.model].create({data})
    }

    async atualizar(id,data){
        return await this.prisma[this.model].update({
            where: {id},
            data
        })
    }

    async apagar(id){
        return await this.prisma[this.model].delete({
            where: {id}
        })
    }

    async detalhar(id){
        return await this.prisma[this.model].findUnique({
            where: {id}
        })
    }
}


module.exports = BaseRepository