import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { AuthState, User } from "./types"

const initialState: AuthState = {
  user: {
    userId: "",
    name: "",
  },
  token: null,
  isAuthenticated: false,
  stepNo: 0,
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
    resetAuth: () => initialState,
  },
})

export const { setAuthenticated, resetAuth, setUser, setToken } = authSlice.actions

export default authSlice.reducer
