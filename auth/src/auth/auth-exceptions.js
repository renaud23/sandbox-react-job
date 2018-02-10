export const CODE_AUTH_FAILURE = "__CODE_AUTH_FAILURE__";
export const CODE_TOKEN_EXPIRED = "__CODE_TOKEN_EXPIRED__";

export const connectionException = message => ({ status: 401, message, code: CODE_AUTH_FAILURE });
export const tokenExpiredException = message => ({ status: 401, message, code: CODE_TOKEN_EXPIRED });
