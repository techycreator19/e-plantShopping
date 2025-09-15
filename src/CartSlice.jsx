import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // ✅ Cart starts empty
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      // Check if the plant already exists
      const existingItem = state.items.find((i) => i.name === item.name);

      if (existingItem) {
        existingItem.quantity += 1; // increment if already in cart
      } else {
        state.items.push({ ...item, quantity: 1 }); // add new plant with quantity 1
      }
    },

    removeItem: (state, action) => {
      const name = action.payload; // expect plant name
      state.items = state.items.filter((i) => i.name !== name);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((i) => i.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
