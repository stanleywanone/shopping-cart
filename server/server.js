const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.listen(8000, () => {
  console.log("listening on 8000")
})

app.get("/products/tv", (req, res) => {
  const items = Array.from({ length: 10 }).map((_, i) => {
    return {
      id: i,
      brand: `Model ${i}`,
      name: `TV ${i}`,
      description: `TV ${i} description `,
      price: i * 10,
    }
  })
  res.send(items)
})

app.get("/products/shoes", (req, res) => {
  const items = Array.from({ length: 10 }).map((_, i) => {
    return {
      id: i,
      brand: `Factory ${i}`,
      name: `Shoes ${i}`,
      description: `Shoes ${i} description `,
      price: i * 10,
    }
  })
  res.send(items)
})

app.get("/products/underwear", (req, res) => {
  const items = Array.from({ length: 10 }).map((_, i) => {
    return {
      id: i,
      brand: `Made ${i}`,
      name: `Underwear ${i}`,
      description: `Underwear ${i} description `,
      price: i * 10,
    }
  })
  res.send(items)
})
