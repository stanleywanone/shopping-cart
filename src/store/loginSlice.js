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

export const { signIn, signOut } = loginSlice.actions

export default loginSlice.reducer