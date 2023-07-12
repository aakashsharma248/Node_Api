class ErrorHandler extends Error {
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}


// this is a middleware for error handling
// if we call any next() function related to task by passing err then first of all this function will be called
export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;
  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;