import "../../store";

import decode from "jwt-decode";
import {
  CustomTokenPayload,
  LoginResponse,
  UserCredentials,
  UserState,
  UseUserStructure,
} from "../../data/types";
import { loginActionCreator } from "../../store/feature/users/authSlice";
import { useAppDispatch } from "@/redux/store/hooks";

const apiUrl = process.env.REACT_APP_URL_API!;
const loginPath = "/users/login";

const useUserForm = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials): Promise<void> => {
    try {
      const response = await fetch(`${apiUrl}${loginPath}`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const wrongCredentials = "Wrong credentials";

        throw new Error(wrongCredentials);
      }

      const { token }: LoginResponse = await response.json();
      const { id, name, isCommunittyAdmin }: CustomTokenPayload = decode(token);
      const userLogin: UserState = {
        id,
        name,
        isCommunittyAdmin,
        token,
      };

      dispatch(loginActionCreator(userLogin));
      localStorage.setItem("token", token);
    } catch (error: unknown) {}
  };

  return { loginUser };
};

export default useUserForm;
