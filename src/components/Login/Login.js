import { useDispatch } from "react-redux"
import { signIn } from "../../store/loginSlice"
import "./Login.scss"

export const Login = () => {
  const dispatch = useDispatch()
  const signIn = () => {
    dispatch(signIn())
  }
  return (
    <div className="container-login">
      <div className="login-card">
        <div className="login-group">
          {" "}
          <label>username: </label>
          <input />
        </div>
        <div className="login-group">
          {" "}
          <label>password: </label>
          <input />
        </div>

        <button onClick={() => signIn()}>Sign In</button>
      </div>
    </div>
  )
}
