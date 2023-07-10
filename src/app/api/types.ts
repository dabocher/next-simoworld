// BACK END TYPES

import { JwtPayload } from "jsonwebtoken";

export interface CustomTokenPayload extends JwtPayload {
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

export interface Events {
  events: Event[];
}
