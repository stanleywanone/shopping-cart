import { memo, useEffect, useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import { itemActions } from "../../store/itemsSlice"
import "./Shoes.scss"

export const Shoes = memo(() => {
  const [shoesProducts, setShoesProducts] = useState([])

  const dispatch = useDispatch()
  const addButton = useCallback(
    (e, item) => {
      e.preventDefault()
      dispatch(itemActions.add(item))
    },
    [dispatch]
  )
  useEffect(() => {
    fetch("http://localhost:8000/products/shoes")
      .then((res) => res.json())
      .then((d) => setShoesProducts(d))
  }, [])

  return (
    <div className="container-shoes">
      {shoesProducts.length > 0 &&
        shoesProducts.map((shoes) => {
          return (
            <div className="card" key={shoes.id}>
              <div className="card-pic">{shoes.brand}</div>

              <div className="card-info">
                <p>{shoes.name}</p>
                <p>{shoes.price}</p>
              </div>

              <button onClick={(e) => addButton(e, shoes)}>Add</button>
            </div>
          )
        })}
    </div>
  )
})

export default Shoes
