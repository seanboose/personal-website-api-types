import { z } from 'zod';

import { ApiError } from './errors';

export const AuthenticatedRequestHeadersSchema = z.object({
  authorization: z
    .string()
    .startsWith('Bearer ')
    .transform((val) => val.replace('Bearer ', '')),
});
export type AuthenticatedRequestHeaders = z.infer<
  typeof AuthenticatedRequestHeadersSchema
>;

export const AuthGrantRequestBodySchema = z.object({
  authRequestClient: z.string(),
});
export type AuthGrantRequestBody = z.infer<typeof AuthGrantRequestBodySchema>;

export const authGrantRequestHeaderName = 'internal-auth-key';
export const AuthGrantRequestHeadersSchema = z.object({
  [authGrantRequestHeaderName]: z.string(),
});
export type AuthGrantRequestHeaders = z.infer<
  typeof AuthGrantRequestHeadersSchema
>;

export const AuthTokenDetails = z.object({
  accessToken: z.string(),
  expiresIn: z.number(),
  refreshToken: z.string(),
  refreshExpiresIn: z.number(),
});
export type AuthGrantResponse = z.infer<typeof AuthTokenDetails>;

export const AuthRefreshRequestBodySchema = z.object({
  refreshToken: z.string(),
});
export type AuthRefreshRequestBody = z.infer<
  typeof AuthRefreshRequestBodySchema
>;

export type AuthRefreshResponse = z.infer<typeof AuthTokenDetails>;

const authErrors = {
  accessTokenExpired: 'ACCESS_TOKEN_EXPIRED',
  accessTokenInvalid: 'ACCESS_TOKEN_INVALID',
  authKeyInvalid: 'AUTH_KEY_INVALID',
  refreshTokenExpired: 'REFRESH_TOKEN_EXPIRED',
  refreshTokenInvalid: 'REFRESH_TOKEN_INVALID',
};

export class AuthenticationError extends ApiError {
  constructor(
    readonly statusCode: number,
    readonly errorType: string,
    readonly message: string,
  ) {
    super(statusCode, errorType, message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class AccessTokenExpiredError extends AuthenticationError {
  constructor(message = 'Access token has expired') {
    super(401, authErrors.accessTokenExpired, message);
  }
}

export class AccessTokenInvalidError extends AuthenticationError {
  constructor(message = 'Access token is invalid') {
    super(401, authErrors.accessTokenInvalid, message);
  }
}

export class AuthKeyInvalidError extends AuthenticationError {
  constructor(message = 'Auth key is invalid') {
    super(401, authErrors.authKeyInvalid, message);
  }
}

export class RefreshTokenExpiredError extends AuthenticationError {
  constructor(message = 'Refresh token expired') {
    super(401, authErrors.refreshTokenExpired, message);
  }
}

export class RefreshTokenInvalidError extends AuthenticationError {
  constructor(message = 'Refresh token is invalid') {
    super(401, authErrors.refreshTokenInvalid, message);
  }
}
