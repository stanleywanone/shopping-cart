import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
  name: "login",
  initialState: { username: "", accessToken: "", loginStatus: false },
  reducers: {
    signIn(state, action) {
      state.loginStatus = false
    },
    signOut(state, action) {
      state.loginStatus = false
    },
    signInSuccess(state, action) {
      state.loginStatus = true
      state.username = action.payload.username
      state.accessToken = action.payload.accessToken
    },
  },
})

export const { signIn, signOut, signInSuccess } = loginSlice.actions

export default loginSlice.reducer
