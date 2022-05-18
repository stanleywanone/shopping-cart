import "./App.scss"
import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Side } from "./components/Side/Side"
import { TV } from "./components/TV/TV"
import Underwear from "./components/Underwear/Underwear"
import Shoes from "./components/Shoes/Shoes"

const App = () => {
  return (
    <div className="app">
      <div className="head"></div>
      <div className="side">
        <Side />
      </div>
      <div className="body">
        <Routes>
          <Route path="/tv" element={<TV />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/underwear" element={<Underwear />} />
          <Route path="/" element={<Navigate replace to="/tv" />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
