import { connectDatabase } from "@/libs/connectDb";
import Community from "@/models/CommunitySchema";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  await connectDatabase();
  try {
    const communities = await Community.find();
    return NextResponse.json(communities);
  } catch (error) {
    return NextResponse.error();
  }
};
