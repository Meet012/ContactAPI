class CustomError extends Error{
    constructor(message,status){
        super(message);
        this.statuscode = status;
    }
}

const createError=(message,status)=>{
    return new CustomError(message,status);
};

module.exports = {createError,CustomError};