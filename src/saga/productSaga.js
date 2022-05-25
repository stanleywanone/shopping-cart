import { call, put, takeEvery } from "redux-saga/effects"
import { getProductsSuccess } from "../store/productSlice"

function* fetchProducts() {
  const products = yield call(() => fetch("http://localhost:8000/products/tv"))
  const res = yield products.json()
  yield put(getProductsSuccess(res))
}

export function* productSaga() {
  yield takeEvery("product/getProducts", fetchProducts)
}
