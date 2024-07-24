const BaseRepository = require("./BaseRepository");

class UserRepository extends BaseRepository{
    constructor(){
        super('pessoas');
    }
}


module.exports = UserRepository