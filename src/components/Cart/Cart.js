import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectNumber } from "../../store/itemsSlice"
import "./Cart.scss"

export const Cart = () => {
  const cartProducts = useSelector((state) => state.items.items)
  const balance = useSelector((state) => state.items.balance)
  const dispatch = useDispatch()

  const onSelect = useCallback(
    (name, e) => {
      const payload = { name: name, number: e.target.value }
      dispatch(selectNumber(payload))
    },
    [dispatch]
  )

  const onPay = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({ balance }),
    }
    fetch("http://localhost:8000/pay", requestOptions)
      .then((res) => res.json())
      .then((data) => console.log("response, ", data))
  }

  return (
    <div className="container-cart">
      {cartProducts.length > 0 &&
        cartProducts.map((product) => {
          return (
            <div className="cart-card" key={product.name}>
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
