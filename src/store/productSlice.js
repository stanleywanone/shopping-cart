import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
  name: "product",
  initialState: { isLoading: false, products: [] },
  reducers: {
    getProducts(state, action) {
      state.isLoading = true
    },
    getProductsSuccess(state, action) {
      state.products = [...action.payload]
      state.isLoading = false
    },
    getProductsFailure(state, action) {
      state.isLoading = false
    },
  },
})

export const { getProducts, getProductsSuccess, getProductsFailure } =
  productSlice.actions

export default productSlice.reducer
