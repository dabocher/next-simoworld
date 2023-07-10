"use client";

import decodeToken from "jwt-decode";
import { loginActionCreator } from "@/redux/features/loginSlice/loginSlice";
import { useAppDispatch } from "@/redux/store/hooks";
import {
  TokenPayload,
  BackLoginResponse,
  UseUserStructure,
  UserCredentials,
  User,
} from "@/redux/types";
import { useRouter } from "next/navigation";

export const useUser = (): UseUserStructure => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-type": "application/json" },
      });

      console.log(response);
      if (!response.ok) {
        throw new Error("Error en el frontend");
      }

      const { token }: BackLoginResponse = await response.json();
      console.log(response.headers.get(token));
      console.log("token ", token);
      const tokenPayload: TokenPayload = decodeToken(token);
      const { id, username } = tokenPayload;

      const user: User = {
        id,
        username,
        token,
      };
      console.log(user);
      dispatch(loginActionCreator(user));

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return { loginUser };
};
