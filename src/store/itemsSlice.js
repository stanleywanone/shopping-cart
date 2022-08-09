import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

const itemsSlice = createSlice({
  name: "items",
  initialState: { items: [], balance: 0, count: 0 },
  reducers: {
    add(state, action) {
      state.items.push({ ...action.payload, number: 1, itemId: uuidv4() })
      state.balance += action.payload.price
      state.count += 1
    },
    remove(state, action) {
      state.items.filter((item) => item.id !== action.payload.id)
      state.balance -= action.payload.price
      state.count -= 1
    },
    clean(state, action) {
      state.items = []
      state.balance = 0
      state.count = 0
    },
    selectNumber(state, action) {
      state.items = state.items.map((item) => {
        if (item.name === action.payload.name) {
          return {
            ...item,
            number: parseInt(action.payload.number),
          }
        }
        return item
      })
      let newBlance = 0
      state.items.forEach((item) => {
        newBlance += item.price * item.number
      })
      state.balance = newBlance
    },
  },
})

export const { add, remove, selectNumber, clean } = itemsSlice.actions

export default itemsSlice.reducer
