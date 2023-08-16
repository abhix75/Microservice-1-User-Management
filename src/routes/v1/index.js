const express = require('express');

const { InfoController } = require('../../controller');
const{AuthRequestMiddleWares}=require('../../middlewares')
const userRoutes= require('./user-routes.js')
const router = express.Router();

router.get('/info',
                  InfoController.info);

router.use('/user', userRoutes);

module.exports = router;