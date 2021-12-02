const errorResponse = require('./erroResponse')

const errorHandle = (req,res, next)=>{
    let error = {...error}
    error.message  = err.message
    console.log(error)
    if(err.message === 11000){
        const message  = `Duplicate Error`
        error  = new  errorResponse(message, 400)
    }

    if(err.message === validateError){
        const message = Object.values(err.errors).map((val)=>val.message)
        error = new errorResponse(message , 400)
    }

    res.status(error.statusCode || 500).json({
        sucess: false,
        error:err.message || "Server Error"
    })

}


module.exports = errorHandle