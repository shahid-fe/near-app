import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { AuthState, User } from "./types"

const initialState: AuthState = {
  user: {
    userId: "",
    name: "",
  },
  token: null,
  isAuthenticated: false,
  stepNo: 1,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated(state, { payload }: PayloadAction<boolean>) {
      state.isAuthenticated = payload
    },
    setUser(state, { payload }: PayloadAction<User>) {
      state.user = payload
    },
    setToken(state, {payload}: PayloadAction<string>) {
      state.token = payload;
    },
    updateStep(state, {payload}: PayloadAction<number>) {
      state.stepNo = payload;
    },
    resetAuth: () => initialState,
  },
})

export const { setAuthenticated, resetAuth, setUser, setToken, updateStep } = authSlice.actions

export default authSlice.reducer
