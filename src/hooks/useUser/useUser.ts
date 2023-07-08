import decodeToken from "jwt-decode";
import { loginActionCreator } from "@/redux/features/loginSlice/loginSlice";
import { useAppDispatch } from "@/redux/store/hooks";
import {
  CustomTokenPayload,
  LoginResponse,
  UseUserStructure,
  UserCredentials,
  User,
} from "@/redux/types";
import { useRouter } from "next/navigation";

const useUser = (): UseUserStructure => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: { "Content-type": "application-json" },
    });

    const { token }: LoginResponse = await response.json();
    const tokenPayload: CustomTokenPayload = decodeToken(token);
    const { id, username } = tokenPayload;

    const user: User = {
      id,
      username,
      token,
    };

    dispatch(loginActionCreator(user));

    localStorage.setItem("token", token);

    router.push("/");
  };
  return { loginUser };
};

export default useUser;
