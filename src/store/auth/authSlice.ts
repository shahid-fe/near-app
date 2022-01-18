import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { AuthState, User } from "./types"

const initialState: AuthState = {
  user: {
    isPasswordAdded: false, // for role based routes testing
    isTeamInfoAdded: false, // for role based routes testing
    email: "",
    role: "", // for role based routes testing
    name: "",
  },
  token: null,
  isAuthenticated: false, // for role based routes testing
  isLoading: false,
  error: null,
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
    resetAuth: () => initialState,
  },
})

export const { setAuthenticated, resetAuth, setUser } = authSlice.actions

export default authSlice.reducer
