const {CustomError}= require('../errors/errors');
const errorHandler = (req,res,err)=>{
    if(err instanceof CustomError){
        return res.status(err.status).json(err.message);
    }
    return res.status(500).json({msg:'Something Went Wrong'});
}

module.exports = errorHandler;