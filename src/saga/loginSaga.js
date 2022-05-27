import { call, put, takeEvery } from "redux-saga/effects"
import { signInSuccess } from "../store/loginSlice"

function* fetchSignIn({ payload }) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }
  const products = yield call(() =>
    fetch("http://localhost:8000/login", requestOptions)
  )
  const res = yield products.json()

  yield put(signInSuccess(res))
}

export function* signInSaga() {
  yield takeEvery("login/signIn", fetchSignIn)
}
