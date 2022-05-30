import { createSlice } from "@reduxjs/toolkit"
import { actionChannel } from "redux-saga/effects"

const loginSlice = createSlice({
  name: "login",
  initialState: { username: "", accessToken: "", loginStatus: false },
  reducers: {
    signIn(state, action) {
      state.loginStatus = false
    },
    signOut(state, action) {
      state.loginStatus = false
      state.accessToken = ""
      localStorage.clear()
    },
    signInSuccess(state, action) {
      state.loginStatus = true
      state.username = action.payload.username
      state.accessToken = action.payload.accessToken
    },
    signInFailed(state, action) {
      state.loginStatus = false
    },
    checkSignIn(state, action) {
      if (action.payload.authToken === "") return (state.loginStatus = false)
      state.loginStatus = true
    },
  },
})

export const { signIn, signOut, signInSuccess, signInFailed, checkSignIn } =
  loginSlice.actions

export default loginSlice.reducer
