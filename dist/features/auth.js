"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenInvalidError = exports.RefreshTokenExpiredError = exports.AuthKeyInvalidError = exports.AccessTokenInvalidError = exports.AccessTokenExpiredError = exports.AuthenticationError = exports.AuthRefreshRequestBodySchema = exports.AuthTokenDetails = exports.AuthGrantRequestHeadersSchema = exports.authGrantRequestHeaderName = exports.AuthGrantRequestBodySchema = exports.AuthenticatedRequestHeadersSchema = void 0;
const zod_1 = require("zod");
const errors_1 = require("./errors");
exports.AuthenticatedRequestHeadersSchema = zod_1.z.object({
    authorization: zod_1.z
        .string()
        .startsWith('Bearer ')
        .transform((val) => val.replace('Bearer ', '')),
});
exports.AuthGrantRequestBodySchema = zod_1.z.object({
    authRequestClient: zod_1.z.string(),
});
exports.authGrantRequestHeaderName = 'internal-auth-key';
exports.AuthGrantRequestHeadersSchema = zod_1.z.object({
    [exports.authGrantRequestHeaderName]: zod_1.z.string(),
});
exports.AuthTokenDetails = zod_1.z.object({
    accessToken: zod_1.z.string(),
    expiresIn: zod_1.z.number(),
    refreshToken: zod_1.z.string(),
    refreshExpiresIn: zod_1.z.number(),
});
exports.AuthRefreshRequestBodySchema = zod_1.z.object({
    refreshToken: zod_1.z.string(),
});
const authErrors = {
    accessTokenExpired: 'ACCESS_TOKEN_EXPIRED',
    accessTokenInvalid: 'ACCESS_TOKEN_INVALID',
    authKeyInvalid: 'AUTH_KEY_INVALID',
    refreshTokenExpired: 'REFRESH_TOKEN_EXPIRED',
    refreshTokenInvalid: 'REFRESH_TOKEN_INVALID',
};
class AuthenticationError extends errors_1.ApiError {
    constructor(statusCode, errorType, message) {
        super(statusCode, errorType, message);
        this.statusCode = statusCode;
        this.errorType = errorType;
        this.message = message;
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.AuthenticationError = AuthenticationError;
class AccessTokenExpiredError extends AuthenticationError {
    constructor(message = 'Access token has expired') {
        super(401, authErrors.accessTokenExpired, message);
    }
}
exports.AccessTokenExpiredError = AccessTokenExpiredError;
class AccessTokenInvalidError extends AuthenticationError {
    constructor(message = 'Access token is invalid') {
        super(401, authErrors.accessTokenInvalid, message);
    }
}
exports.AccessTokenInvalidError = AccessTokenInvalidError;
class AuthKeyInvalidError extends AuthenticationError {
    constructor(message = 'Auth key is invalid') {
        super(401, authErrors.authKeyInvalid, message);
    }
}
exports.AuthKeyInvalidError = AuthKeyInvalidError;
class RefreshTokenExpiredError extends AuthenticationError {
    constructor(message = 'Refresh token expired') {
        super(401, authErrors.refreshTokenExpired, message);
    }
}
exports.RefreshTokenExpiredError = RefreshTokenExpiredError;
class RefreshTokenInvalidError extends AuthenticationError {
    constructor(message = 'Refresh token is invalid') {
        super(401, authErrors.refreshTokenInvalid, message);
    }
}
exports.RefreshTokenInvalidError = RefreshTokenInvalidError;
