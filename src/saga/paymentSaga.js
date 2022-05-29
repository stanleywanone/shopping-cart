import { call, put, takeEvery } from "redux-saga/effects"
import { paySuccess, payFailed } from "../store/paymentSlice"

function* fetchPay({ payload }) {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: payload.accessToken,
      },
      body: JSON.stringify({ balance: payload.balance }),
    }

    const payResult = yield call(() => {
      return fetch("http://localhost:8000/pay", requestOptions)
    })

    const res = yield payResult.json()

    yield put(paySuccess(res))
  } catch (err) {
    yield put(payFailed(err))
  }
}

export function* paySaga() {
  yield takeEvery("payment/pay", fetchPay)
}
