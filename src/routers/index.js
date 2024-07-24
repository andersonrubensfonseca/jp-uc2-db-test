const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController')

router.get('/',(req,res)=>{
    return res.send('Olá!!')
});

router.get('/users',userController.index)

module.exports = router