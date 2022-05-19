import { memo } from "react"
import { FaShoppingCart } from "react-icons/fa"
import "./Head.scss"

export const Head = memo(() => {
  return (
    <div className="container-head">
      <FaShoppingCart size={40} />
      <div className="cart-number">1</div>
    </div>
  )
})
