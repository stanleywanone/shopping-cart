import { memo } from "react"
import { Link } from "react-router-dom"

export const Side = memo(() => {
  return (
    <>
      <Link to="/">TV</Link>
      <Link to="/shoes">Shoes</Link>
      <Link to="/underwear">Underwear</Link>
    </>
  )
})

export default Side
