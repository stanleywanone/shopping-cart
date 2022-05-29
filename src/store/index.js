import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"
import itemsReducer from "./itemsSlice"
import loginSliceReducer from "./loginSlice"
import productReducer from "./productSlice"
import paymentReducer from "./paymentSlice"

import rootSaga from "../saga/rootSaga"

const saga = createSagaMiddleware()

const store = configureStore({
  reducer: {
    items: itemsReducer,
    login: loginSliceReducer,
    products: productReducer,
    payment: paymentReducer,
  },
  middleware: [saga],
})

saga.run(rootSaga)

export default store
