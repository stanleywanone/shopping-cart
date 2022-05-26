import { createSlice } from "@reduxjs/toolkit"

const itemsSlice = createSlice({
  name: "items",
  initialState: { items: [], balance: 0, count: 0 },
  reducers: {
    add(state, action) {
      state.items.push({ ...action.payload, number: 1 })
      state.balance += action.payload.price
      state.count += 1
    },
    remove(state, action) {
      state.items.filter((item) => item.id !== action.payload.id)
      state.balance -= action.payload.price
      state.count -= 1
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

export const { add, remove, selectNumber } = itemsSlice.actions

export default itemsSlice.reducer
