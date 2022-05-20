import { configureStore } from "@reduxjs/toolkit"

import itemsSlice from "./itemsSlice"
import loginSlice from "./loginSlice"

const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    login: loginSlice.reducer,
  },
})

export default store
