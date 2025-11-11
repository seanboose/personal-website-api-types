import { z } from "zod";
import { ApiError } from "./errors";
export declare const AuthenticatedRequestHeadersSchema: z.ZodObject<{
    authorization: z.ZodPipe<z.ZodString, z.ZodTransform<string, string>>;
}, z.core.$strip>;
export type AuthenticatedRequestHeaders = z.infer<typeof AuthenticatedRequestHeadersSchema>;
export declare const AuthGrantRequestBodySchema: z.ZodObject<{
    authRequestClient: z.ZodString;
}, z.core.$strip>;
export type AuthGrantRequestBody = z.infer<typeof AuthGrantRequestBodySchema>;
export declare const authGrantRequestHeaderName = "internal-auth-key";
export declare const AuthGrantRequestHeadersSchema: z.ZodObject<{
    "internal-auth-key": z.ZodString;
}, z.core.$strip>;
export type AuthGrantRequestHeaders = z.infer<typeof AuthGrantRequestHeadersSchema>;
export declare const AuthTokenDetails: z.ZodObject<{
    accessToken: z.ZodString;
    expiresIn: z.ZodNumber;
    refreshToken: z.ZodString;
    refreshExpiresIn: z.ZodNumber;
}, z.core.$strip>;
export type AuthGrantResponse = z.infer<typeof AuthTokenDetails>;
export declare const AuthRefreshRequestBodySchema: z.ZodObject<{
    refreshToken: z.ZodString;
}, z.core.$strip>;
export type AuthRefreshRequestBody = z.infer<typeof AuthRefreshRequestBodySchema>;
export type AuthRefreshResponse = z.infer<typeof AuthTokenDetails>;
export declare class AuthenticationError extends ApiError {
    readonly statusCode: number;
    readonly errorType: string;
    readonly message: string;
    constructor(statusCode: number, errorType: string, message: string);
}
export declare class AccessTokenExpiredError extends AuthenticationError {
    constructor(message?: string);
}
export declare class AccessTokenInvalidError extends AuthenticationError {
    constructor(message?: string);
}
export declare class AuthKeyInvalidError extends AuthenticationError {
    constructor(message?: string);
}
export declare class RefreshTokenExpiredError extends AuthenticationError {
    constructor(message?: string);
}
export declare class RefreshTokenInvalidError extends AuthenticationError {
    constructor(message?: string);
}
