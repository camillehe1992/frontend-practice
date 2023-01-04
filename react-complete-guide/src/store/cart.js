import { createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:27017/parse";
const HEADERS = {
  "X-Parse-Application-Id": "APPLICATION_ID",
  "Content-Type": "application/json",
};

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [{ id: "p3", title: "Book 3", quantity: 3, total: 18, price: 6 }],
    totalQuantity: 3,
  },
  reducers: {
    addItem: (state, { payload: newItem }) => {
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity++;
        existingItem.total += existingItem.price;
      }
      state.totalQuantity++;
    },
    removeItem: (state, { payload: removedItem }) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === removedItem.id
      );
      if (state.items[existingItemIndex].quantity === 1) {
        state.items.splice(existingItemIndex, 1);
      } else {
        state.items[existingItemIndex].quantity--;
        state.items[existingItemIndex].total -=
          state.items[existingItemIndex].price;
      }
      state.totalQuantity--;
    },
    addToCart: (state, { payload: newItem }) => {
      const newItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );
      if (newItemIndex > -1) {
        state.items[newItemIndex].quantity++;
        state.items[newItemIndex].total =
          state.items[newItemIndex].quantity * state.items[newItemIndex].price;
      } else {
        state.items.push(newItem);
      }
      state.totalQuantity++;
    },
  },
});

export const cartActions = cart.actions;

export default cart.reducer;
