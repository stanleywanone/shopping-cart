import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"
import itemsReducer from "./itemsSlice"
import loginSliceReducer from "./loginSlice"
import productReducer from "./productSlice"
import productSaga from "../saga/productSaga"
import rootSaga from "../saga/rootSaga"

const saga = createSagaMiddleware()

const store = configureStore({
  reducer: {
    items: itemsReducer,
    login: loginSliceReducer,
    products: productReducer,
  },
  middleware: [saga],
})

saga.run(rootSaga)

export default store
