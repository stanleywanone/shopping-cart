import { memo, useEffect, useState } from "react"
import "./Shoes.scss"
export const Shoes = memo(() => {
  const [shoesProducts, setShoesProducts] = useState([])

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

              <button>Add</button>
            </div>
          )
        })}
    </div>
  )
})

export default Shoes
