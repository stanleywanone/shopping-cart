import { memo } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import "./Side.scss"

export const Side = memo(() => {
  const location = useLocation()
  return (
    <div className="container-side">
      <Link
        to="/"
        className="container-item first-item"
        style={{
          backgroundColor: location.pathname.includes("tv")
            ? "#063970"
            : undefined,
        }}
      >
        TV
      </Link>
      <Link
        to="/shoes"
        className="container-item"
        style={{
          backgroundColor: location.pathname.includes("shoes")
            ? "#063970"
            : undefined,
        }}
      >
        Shoes
      </Link>
      <Link
        to="/underwear"
        className="container-item"
        style={{
          backgroundColor: location.pathname.includes("underwear")
            ? "#063970"
            : undefined,
        }}
      >
        Underwear
      </Link>
    </div>
  )
})

export default Side
