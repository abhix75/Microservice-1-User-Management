const { StatusCodes }= require('http-status-codes');

const { UserService} = require('../service/index');
const user = require('../models/user');

const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function signup(req,res)
{
     try {
        const user = await UserService.create({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username
        });
        SuccessResponse.data = user;
        return res
                 .status(StatusCodes.CREATED)
                 .json(SuccessResponse)
    } catch (error)
     {
        ErrorResponse.error=error;
        return res
                 .status(error.statusCodes)
                 .json(ErrorResponse)
     }
 }
 async function getDetails(req,res)
{
    try {
        const response = await UserService.getDetails();
        SuccessResponse.data=response;
        return res 
                 .status(StatusCodes.OK)
                 .json(SuccessResponse)
                 
    } catch (error) {
        ErrorResponse.error=error;
        return res 
                 .status(error.statusCodes)
                 .json(ErrorResponse)
    }
}
async function getDetail(req,res)
{
    try {
        const response = await UserService.getDetail(req.params.id);
        SuccessResponse.data=response;
        return res 
                 .status(StatusCodes.OK)
                 .json(SuccessResponse)
                 
    } catch (error) {
        ErrorResponse.error=error;
        return res 
                 .status(error.statusCodes)
                 .json(ErrorResponse)
    }
}
async function getDestroy(req,res)
{
    try {
        const response = await UserService.destroydetail(req.params.id);
        SuccessResponse.data=response;
        return res 
                 .status(StatusCodes.OK)
                 .json(SuccessResponse)
                 
    } catch (error) {
        ErrorResponse.error=error;
        return res 
                 .status(error.statusCodes)
                 .json(ErrorResponse)
    }
}
async function updateUser(req,res)
{
    try {
        const response = await UserService.getUpdate(req.params.id,req.body);
        SuccessResponse.data=response;
        return res 
                 .status(StatusCodes.OK)
                 .json(SuccessResponse)
                 
    } catch (error) {
        ErrorResponse.error=error;
        return res 
                 .status(error.statusCodes)
                 .json(ErrorResponse)
    }
}



  // ... other CRUD methods ...


  module.exports={
    signup,
    getDetails,
    getDetail,
    getDestroy,
    updateUser
 }
