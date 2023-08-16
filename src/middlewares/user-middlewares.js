const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");
function ValidateAuthRequest(req,res,next)
{
    if(!req.body.email)
    {
        ErrorResponse.message = 'Something went wrong while Authenticating user';
        ErrorResponse.error = new AppError('email  Not Found In the incomin request',StatusCodes.NOT_FOUND)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.password)
    {
        ErrorResponse.message = 'Something went wrong while Authenticating user';
        ErrorResponse.error = new AppError('password  Not Found In the incomin request',StatusCodes.NOT_FOUND)
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports={
    ValidateAuthRequest
}