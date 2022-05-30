import "./App.scss"
import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Head } from "./components/Head/Head"
import { Side } from "./components/Side/Side"
import { TV } from "./components/TV/TV"
import { Cart } from "./components/Cart/Cart"
import { Login } from "./components/Login/Login"
import Underwear from "./components/Underwear/Underwear"
import Shoes from "./components/Shoes/Shoes"
import { useSelector, useDispatch } from "react-redux"
import { checkSignIn } from "./store/loginSlice"

const App = () => {
  const login = useSelector((state) => state.login.loginStatus)
  const accessToken = useSelector((state) => state.login.accessToken)
  const dispatch = useDispatch()

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken)
    }
  }, [accessToken])

  useEffect(() => {
    const authToken = localStorage.getItem("accessToken", accessToken)
    dispatch(checkSignIn(authToken))
  }, [accessToken, dispatch])

  if (!login)
    return (
      <div className="login">
        <Login />
      </div>
    )
  return (
    <div className="app">
      <div className="head">
        <Head />
      </div>
      <div className="side">
        <Side />
      </div>
      <div className="body">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/underwear" element={<Underwear />} />
          <Route path="/" element={<Navigate replace to="/tv" />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
