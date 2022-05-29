import { createSlice } from "@reduxjs/toolkit"

const paymentSlice = createSlice({
  name: "payment",
  initialState: { paymentLoading: false, paymentStatus: false, paymentRes: "" },
  reducers: {
    pay(state, action) {
      state.loading = true
    },
    paySuccess(state, action) {
      state.loading = false
      state.paymentStatus = true
      state.paymentRes = action.payload
    },
    payFailed(state, action) {
      state.loading = false
      state.paymentStatus = false
      state.paymentRes = action.payload
    },
  },
})

export const { pay, paySuccess, payFailed } = paymentSlice.actions

export default paymentSlice.reducer
