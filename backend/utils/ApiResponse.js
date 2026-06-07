class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.status = true;
        this.success = true;
    }
}

module.exports = ApiResponse;