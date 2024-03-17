import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginMode: true,
  isLogin: false,
  email: null,
  accessToken: null,
  userId: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.refreshToken=action.payload.refreshToken;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.userId = action.payload.userId;
      state.isLogin = !!action.payload.accessToken;
    },
    logout(state) {
      localStorage.clear();
      state.email = null;
      state.accessToken = null;
      state.userId = null;
      state.isLogin = false;
    },
    toggleLoginMode(state){
        state.isLoginMode=!state.isLoginMode;
    },
    loginMode(state){
        state.isLoginMode=true;
    },
    signupMode(state){
        state.isLoginMode=false;
    },
  },
});

export default authSlice;