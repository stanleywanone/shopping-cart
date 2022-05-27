import { useState } from "react"
import { useDispatch } from "react-redux"
import { signIn } from "../../store/loginSlice"
import "./Login.scss"

export const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const theSignIn = () => {
    dispatch(signIn({ username, password }))
  }

  return (
    <div className="container-login">
      <div className="login-card">
        <div className="login-group">
          {" "}
          <label>username: </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-group">
          {" "}
          <label>password: </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={() => theSignIn()}>Sign In</button>
      </div>
    </div>
  )
}
