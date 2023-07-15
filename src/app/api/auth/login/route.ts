// LOGIN ROUTE

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDatabase } from "@/libs/connectDb";
import User from "@/models/UserSchema";
import { NextResponse } from "next/server";
import { CustomTokenPayload } from "@/app/api/types";

export const POST = async (request: Request) => {
  const { email, password } = await request.json();

  await connectDatabase();
  try {
    const userFound = await User.findOne({ email });

    if (!userFound) {
      return NextResponse.json("Wrong credentials", { status: 401 });
    }

    const arePasswordsEqual = await bcrypt.compare(
      password,
      userFound.password
    );

    if (!arePasswordsEqual) {
      return NextResponse.json("Wrong credentials", { status: 401 });
    }

    // TOKEN & token interface

    const jwtPayload: CustomTokenPayload = {
      id: userFound._id,
      username: userFound.username,
    };

    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET!, {
      expiresIn: "2d",
    });

    return NextResponse.json({ token });
  } catch (error: unknown) {
    return NextResponse.error();
  }
};
