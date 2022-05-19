import { memo, useEffect, useState } from "react"
import "./TV.scss"
export const TV = memo(() => {
  const [tvProducts, setTvProducts] = useState([])

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

              <button>Add</button>
            </div>
          )
        })}
    </div>
  )
})

export default TV
