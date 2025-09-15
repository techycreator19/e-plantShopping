import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // ✅ Start with empty cart
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;

      // ✅ Check if plant already exists in cart
      const existingItem = state.items.find((i) => i.name === item.name);

      if (existingItem) {
        // If exists, increment quantity
        existingItem.quantity += 1;
      } else {
        // If new, add with quantity 1
        state.items.push({ ...item, quantity: 1 });
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
