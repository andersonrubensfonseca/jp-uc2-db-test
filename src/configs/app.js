const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const router = require('../routers/index')


class App{
    constructor(){
        this.server = express();
        this.middleware()
        this.routers()
    }

    middleware(){
        this.server.use(cors())
        this.server.use(helmet())
        this.server.use(express.json())
    }

    routers(){
        this.server.use(router)
    }
}


module.exports = new App().server