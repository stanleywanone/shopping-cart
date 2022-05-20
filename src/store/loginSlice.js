import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
  name: "login",
  initialState: { loginStatus: false },
  reducers: {
    signIn(state, action) {
      state.loginStatus = true
    },
    signOut(state, action) {
      state.loginStatus = false
    },
  },
})

export const loginActions = loginSlice.actions

export default loginSlice
