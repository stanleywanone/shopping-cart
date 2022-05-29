import { all, fork } from "redux-saga/effects"
import { productSaga } from "./productSaga"
import { signInSaga } from "./loginSaga"
import { paySaga } from "./paymentSaga"

export default function* rootSaga() {
  yield all([fork(productSaga), fork(signInSaga), fork(paySaga)])
}
