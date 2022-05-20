import { memo } from "react"
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"
import "./Head.scss"

export const Head = memo(() => {
  const count = useSelector((state) => state.items.count)
  return (
    <div className="container-head">
      <FaShoppingCart size={40} />
      <div className="cart-number">{count}</div>
    </div>
  )
})
