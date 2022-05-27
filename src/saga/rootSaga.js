import { all, fork } from "redux-saga/effects"
import { productSaga } from "./productSaga"
import { signInSaga } from "./loginSaga"

export default function* rootSaga() {
  yield all([fork(productSaga), fork(signInSaga)])
}
