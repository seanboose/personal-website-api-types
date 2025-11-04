// header for initial auth requests, must be paired with auth secret
export const authRequestHeaderName = "internal-auth-key";

// must be passed with a value in body of auth requests
export const authRequestClientKey = "auth-request-client";

// name of (short term) access token returned by auth requests
export const authAccessTokenName = "access_token";

// name of (long term) refresh token returned by auth requests
export const authRefreshTokenName = "refresh_token";

export const authErrors = {
  accessTokenExpired: "ACCESS_TOKEN_EXPIRED",
  accessTokenInvalid: "ACCESS_TOKEN_INVALID",
  accessTokenNotProvided: "ACCESS_TOKEN_NOT_PROVIDED",
  authKeyInvalid: "AUTH_KEY_INVALID",
  clientNotProvided: "CLIENT_NOT_PROVIDED",
  refreshTokenExpired: "REFRESH_TOKEN_EXPIRED",
  refreshTokenInvalid: "REFRESH_TOKEN_INVALID"
};

// TODO merge api-types changes into master and publish minor once done