import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { UIState } from "./types"

const initialState: UIState = {
  loadingState: "",
  successNotificationMessage: "",
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoadingState(state, { payload }: PayloadAction<string>) {
      state.loadingState = payload
    },
    setSuccessNotificationMessage(state, { payload }: PayloadAction<string>) {
      state.successNotificationMessage = payload
    },
    resetUI: () => initialState,
  },
})

export const {
  resetUI,
  setLoadingState,
  setSuccessNotificationMessage,
} = uiSlice.actions

export default uiSlice.reducer
