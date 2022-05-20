import { createSlice } from "@reduxjs/toolkit"

const itemsSlice = createSlice({
  name: "items",
  initialState: { items: [], balance: 0, count: 0 },
  reducers: {
    add(state, action) {
      state.items.push(action.payload)
      state.balance += action.payload.price
      state.count += 1
    },
    remove(state, action) {
      state.items.filter((item) => item.id !== action.payload.id)
      state.balance -= action.payload.price
      state.count -= 1
    },
  },
})

export const { add, remove } = itemsSlice.actions

export default itemsSlice.reducer
