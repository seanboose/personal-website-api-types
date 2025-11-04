// header for initial auth requests, must be paired with auth secret
export const authRequestHeaderName = "internal-auth-key";

// name of (short term) access token returned by auth requests
export const authAccessTokenName = "access_token";

// name of (long term) refresh token returned by auth requests
export const authRefreshTokenName = "refresh_token";

// must be passed with a value in body of auth requests
export const authRequestClientKey = "auth-request-client";

export const authErrors = {
  authTokenNotProvided: "TOKEN_NOT_PROVIDED",
  authTokenExpired: "AUTH_TOKEN_EXPIRED",
  authTokenInvalid: "AUTH_TOKEN_INVALID",
  refreshTokenExpired: "REFRESH_TOKEN_EXPIRED",
  refreshTokenInvalid: "REFRESH_TOKEN_INVALID"
};

// TODO merge api-types changes into master once done