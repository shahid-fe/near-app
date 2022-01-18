import { combineReducers } from "@reduxjs/toolkit"
import auth from "./auth"
import ui from "./ui"

const rootReducer = combineReducers({
  auth,
  ui,
})

export default rootReducer
