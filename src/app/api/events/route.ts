// purpose: define GET and POST routes for events

import { connectDatabase } from "@/libs/connectDb";
import Event from "@/models/EventSchema";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  await connectDatabase();
  try {
    const events = await Event.find();
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.error();
  }
};

/* export const POST = async (req:Request) => {
  const event = await req.json();
  await connectDatabase();
  try {
    const newEvent = await Event.create(event);
    return NextResponse.redirect(`/events/${newEvent._id}`);
  }
  catch (error) {
    return NextResponse.error();
  }
} */
