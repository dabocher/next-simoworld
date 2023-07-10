import { JwtPayload } from "jwt-decode";

// FRONT END TYPES

export interface UserCredentials {
  username: string;
  email: string;
  password: string;
}

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

export interface User {
  id: string;
  username: string;
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
}

export interface BackLoginResponse {
  token: string;
}

export interface TokenPayload extends JwtPayload {
  id: string;
  username: string;
}
