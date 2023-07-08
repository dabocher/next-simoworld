export interface UserCredentials {
  username: string;
  email: string;
  password: string;
}

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

export interface LoginResponse {
  token: string;
}

export interface CustomTokenPayload extends LoginResponse {
  id: string;
  username: string;
}

export interface User {
  id: string;
  username: string;
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
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

export interface Events {
  events: Event[];
}
