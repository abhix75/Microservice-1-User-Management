const express = require('express');

const {UserController}=require('../../controller');
const { AuthRequestMiddleWares } = require('../../middlewares');

const router = express.Router();

          router.post('/signup',
                          AuthRequestMiddleWares.ValidateAuthRequest,
                          UserController.signup)

          router.get('/',UserController.getDetails)  
          
          
          router.get('/:id',UserController.getDetail)

          router.delete('/:id',UserController.getDestroy)

          router.put('/:id',UserController.updateUser)
                
module.exports =router; 