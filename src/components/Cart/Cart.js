import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectNumber } from "../../store/itemsSlice"
import { pay } from "../../store/paymentSlice"
import { clean } from "../../store/itemsSlice"
import "./Cart.scss"

export const Cart = () => {
  const cartProducts = useSelector((state) => state.items.items)
  const balance = useSelector((state) => state.items.balance)
  const paymentRes = useSelector((state) => state.payment.paymentRes)
  const dispatch = useDispatch()

  const onSelect = useCallback(
    (name, e) => {
      const payload = { name: name, number: e.target.value }
      dispatch(selectNumber(payload))
    },
    [dispatch]
  )

  const onPay = () => {
    dispatch(pay({ accessToken: localStorage.getItem("accessToken"), balance }))
  }

  useEffect(() => {
    if (paymentRes.length > 0) {
      alert(paymentRes)
      dispatch(clean())
    }
  }, [dispatch, paymentRes])

  return (
    <div className="container-cart">
      {cartProducts.length > 0 &&
        cartProducts.map((product) => {
          return (
            <div className="cart-card" key={product.itemId}>
              <div className="cart-name">{product.name}</div>
              <div className="cart-brand">{product.brand}</div>
              <div className="cart-description">{product.description}</div>
              <div className="cart-price">
                ${product.price * product.number}
                <select onChange={(e) => onSelect(product.name, e)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          )
        })}
      <div className="cart-total-price-card">
        <div className="cart-total-price">Total Price: {balance}</div>
      </div>
      <button onClick={() => onPay()}>Pay</button>
    </div>
  )
}
