class ApiError extends Error {
    constructor(message, statusCode, stack = "", errors = []) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode;
        this.success = false;
        this.data = null;
        this.errors = errors;

        // 2. Capture the stack trace correctly
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

module.exports = ApiError;