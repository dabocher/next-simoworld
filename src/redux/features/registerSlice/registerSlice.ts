import { UserCredentials } from "@/redux/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState:UserCredentials = {
  username: "",
  email: "",
  password: "",
}

export const registerSlice = createSlice({
  name: "register",
  initialState,    
  reducers: {
    signupUser: (
      currentUserState: UserCredentials,
      action: PayloadAction<UserCredentials>): UserCredentials => ({
        ...currentUserState,
        ...action.payload,      
      }),
  },
});

export const registerReducer = registerSlice.reducer;
export const { signupUser: signupActionCreator } = registerSlice.actions;
