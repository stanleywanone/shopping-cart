import { memo, useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add } from "../../store/itemsSlice"
import { getProducts } from "../../store/productSlice"
import "./TV.scss"
export const TV = memo(() => {
  const dispatch = useDispatch()
  const addButton = useCallback(
    (e, item) => {
      e.preventDefault()
      dispatch(add(item))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const tvProducts = useSelector((state) => state.products.products)

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
