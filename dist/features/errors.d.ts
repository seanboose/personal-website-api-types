export declare class ApiError extends Error {
    readonly statusCode: number;
    readonly errorType: string;
    readonly message: string;
    constructor(statusCode: number, errorType: string, message: string);
    toJSON(): {
        statusCode: number;
        errorType: string;
        message: string;
    };
}
export declare class UnexpectedError extends ApiError {
    constructor(message?: string);
}
export declare class ValidationError extends ApiError {
    constructor(message?: string);
}
