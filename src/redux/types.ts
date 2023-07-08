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

export interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  simulator: string;
  track: string;
  car: string;
  category: string;
  community: string;
  price: number;
  image: string;
  slots: number;
}
