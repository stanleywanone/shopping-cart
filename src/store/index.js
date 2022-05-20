import { configureStore } from "@reduxjs/toolkit"

import itemsReducer from "./itemsSlice"
import loginSliceReducer from "./loginSlice"

const store = configureStore({
  reducer: {
    items: itemsReducer,
    login: loginSliceReducer,
  },
})

export default store
