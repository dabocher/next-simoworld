// BACK END TYPES

import { JwtPayload } from "jsonwebtoken";

export interface CustomTokenPayload extends JwtPayload {
  id: string;
  username: string;
}

export interface Event {
  id: number;
  eventName: string;
  description: string;
  eventDay: string;
  simulator: string;
  track: string;
  car: string;
  category: string;
  community: string;
  price: number;
  image: string;
  slots: number;
}

export type Events = Event[];

export interface EventsStructure {
  events: Events;
  eventDetail: Event;
}
