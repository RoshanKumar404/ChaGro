export const API_BASE_URL = "http://192.168.1.47:8000";
export const getApiUrl = (endpoints) => API_BASE_URL + endpoints;

export const SIGN_UP_API = getApiUrl("/users/SignedIn");
export const GET_USER = getApiUrl("/users/users");
export const OTP_VERIFICATION_API = getApiUrl("/users/Otp");
