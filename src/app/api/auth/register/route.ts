// REGISTER ROUTE

import User from "@/models/UserSchema";
import { NextResponse } from "next/server";
import { connectDatabase } from "@/libs/connectDb";
import bcrypt from "bcryptjs";

export const POST = async (request: Request) => {
  const { username, email, password } = await request.json();
  if (!password || password.length < 8) {
    return NextResponse.json("Password must be at least 8 characters long", {
      status: 400,
    });
  }

  try {
    await connectDatabase();
    const userFound = await User.findOne({ $or: [{ email }, { username }] });
    if (userFound) {
      return NextResponse.json("User already exists", { status: 409 });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    return NextResponse.json(
      { message: `Hello ${savedUser.username}` },
      { status: 201 }
    );
  } catch (error) {
    console.log(error, "error en el backend");
    return NextResponse.error();
  }
};
