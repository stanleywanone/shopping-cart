import { memo } from "react"
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"
import "./Head.scss"

export const Head = memo(() => {
  const count = useSelector((state) => state.items.count)
  return (
    <div className="container-head">
      <h1>Shopping Cart</h1>
      <Link to="/cart">
        <FaShoppingCart size={40} color="black" />
      </Link>
      <div className="cart-number">{count}</div>
    </div>
  )
})
