import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { UIState } from "./types"

const initialState: UIState = {
  modalName: "",
  sideNav: {
    expanded: [],
    isOpened: true,
  },
  loadingState: "",
  successNotificationMessage: "",
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal(state, { payload }: PayloadAction<string>) {
      state.modalName = payload
    },
    closeModal(state) {
      state.modalName = ""
    },
    setLoadingState(state, { payload }: PayloadAction<string>) {
      state.loadingState = payload
    },
    clearLoadingState(state) {
      state.loadingState = ""
    },
    setInExpanded(state, { payload }: PayloadAction<string>) {
      state.sideNav.expanded.push(payload)
    },
    removeFromExpanded(state, { payload }: PayloadAction<string>) {
      state.sideNav.expanded = state.sideNav.expanded.filter(item => item !== payload)
    },
    setSuccessNotificationMessage(state, { payload }: PayloadAction<string>) {
      state.successNotificationMessage = payload
    },
    toggleSideNav(state) {
      state.sideNav.isOpened = !state.sideNav.isOpened
    },
    resetUI: () => initialState,
  },
})

export const {
  openModal,
  closeModal,
  setInExpanded,
  removeFromExpanded,
  resetUI,
  setLoadingState,
  clearLoadingState,
  toggleSideNav,
  setSuccessNotificationMessage,
} = uiSlice.actions

export default uiSlice.reducer
