export interface UserCredentials {
  username: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}
export interface CustomTokenPayload extends LoginResponse {
  id: string;
  username: string;
}
