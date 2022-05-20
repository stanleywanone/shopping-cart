import { memo, useEffect, useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import { itemActions } from "../../store/itemsSlice"
import "./Underwear.scss"
export const Underwear = memo(() => {
  const [underwearProducts, setUnderwearProducts] = useState([])
  const dispatch = useDispatch()
  const addButton = useCallback((e, item) => {
    e.preventDefault()
    dispatch(itemActions.add(item))
  }, [])

  useEffect(() => {
    fetch("http://localhost:8000/products/underwear")
      .then((res) => res.json())
      .then((d) => setUnderwearProducts(d))
  }, [])
  return (
    <div className="container-underwear">
      {underwearProducts.length > 0 &&
        underwearProducts.map((underwear) => {
          return (
            <div className="card" key={underwear.id}>
              <div className="card-pic">{underwear.brand}</div>

              <div className="card-info">
                <p>{underwear.name}</p>
                <p>{underwear.price}</p>
              </div>

              <button onClick={(e) => addButton(e, underwear)}>Add</button>
            </div>
          )
        })}
    </div>
  )
})

export default Underwear
