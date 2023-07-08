import { User, UserState } from "@/redux/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  username: "",
  id: "",
  token: "",
  isLogged: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUser: (
      currentUserState: UserState,
      action: PayloadAction<User>
    ): UserState => ({
      ...currentUserState,
      ...action.payload,
    }),
  },
});

export const loginReducer = loginSlice.reducer;
export const { loginUser: loginActionCreator } = loginSlice.actions;
