"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.UnexpectedError = exports.ApiError = void 0;
class ApiError extends Error {
    constructor(statusCode, errorType, message) {
        super(message);
        this.statusCode = statusCode;
        this.errorType = errorType;
        this.message = message;
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
    toJSON() {
        return {
            statusCode: this.statusCode,
            errorType: this.errorType,
            message: this.message
        };
    }
}
exports.ApiError = ApiError;
class UnexpectedError extends ApiError {
    constructor(message = "Something went wrong") {
        super(500, "INTERNAL_SERVER_ERROR", message);
    }
}
exports.UnexpectedError = UnexpectedError;
class ValidationError extends ApiError {
    constructor(message = "Error occurred during schema validation") {
        super(400, "VALIDATION_ERROR", message);
    }
}
exports.ValidationError = ValidationError;
