import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          author: newItem.author,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      let quantityPrice = state.cartItems.map(
        (item) => item.price * item.quantity
      );

      state.totalAmount = quantityPrice.reduce((total, item) => total + item);
    },
    deleteItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem);
      state.totalQuantity--;
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
          existingItem.totalPrice =
            Number(existingItem.totalPrice) + Number(newItem.price);
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== existingItem.id
          );
        }
        let quantityPrice = state.cartItems.map(
          (item) => item.price * item.quantity
        );
        state.totalAmount =
          quantityPrice.length > 0
            ? quantityPrice.reduce((total, item) => total + item)
            : 0;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export const getTotalQuantity = (state) => state.cart.totalQuantity;
export const getTotalAmount = (state) => state.cart.totalAmount;
export const getCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer;
