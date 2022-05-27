const express = require("express")
const app = express()
const cors = require("cors")
const jwt = require("jsonwebtoken")

app.use(cors())
app.use(express.json())

app.listen(8000, () => {
  console.log("listening on 8000")
})

const USERS = [{ id: "1", username: "apple", password: "123" }]

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

app.post("/login", (req, res) => {
  const { username, password } = req.body
  const user = USERS.find((user) => {
    return user.username === username && user.password === password
  })

  if (user) {
    //Generate an access token
    const accessToken = jwt.sign(
      { id: user.id, result: user },
      "thisIsTheSecrectKey"
    )
    res.json({
      username: user.username,
      accessToken,
    })
  } else {
    res.status(400).json("UserName or password incorrect!")
  }
})
