import { createSlice } from "@reduxjs/toolkit";

// const loadCartFromLocalStorage = () => {

//       const cartData = localStorage.getItem('cart');
//       return cartData ? JSON.parse(cartData) : [];

//   };

//   const saveCartToLocalStorage = (cartItems) => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   };

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addtoCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].value = state.cart[find].value + 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, value } = cartItem;
          console.log(price, value);
          const itemTotal = price * value;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += value;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );

      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeCart: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload.id);

      // saveCartToLocalStorage(state.x)
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, value: item.value + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, value: item.value - 1 };
        }
        return item;
      });
    },
  },
});

export default cartSlice.reducer;
export const { addtoCart, getCartTotal, removeCart,increaseItemQuantity,
  decreaseItemQuantity, } = cartSlice.actions;
