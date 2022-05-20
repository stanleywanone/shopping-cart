import { memo, useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { itemActions } from "../../store/itemsSlice"
import "./TV.scss"
export const TV = memo(() => {
  const [tvProducts, setTvProducts] = useState([])
  const dispatch = useDispatch()
  const addButton = useCallback((e, item) => {
    e.preventDefault()
    dispatch(itemActions.add(item))
  }, [])

  useEffect(() => {
    fetch("http://localhost:8000/products/tv")
      .then((res) => res.json())
      .then((d) => setTvProducts(d))
  }, [])
  return (
    <div className="container-tv">
      {tvProducts.length > 0 &&
        tvProducts.map((tv) => {
          return (
            <div className="card" key={tv.id}>
              <div className="card-pic">{tv.brand}</div>

              <div className="card-info">
                <p>{tv.name}</p>
                <p>{tv.price}</p>
              </div>

              <button onClick={(e) => addButton(e, tv)}>Add</button>
            </div>
          )
        })}
    </div>
  )
})

export default TV
