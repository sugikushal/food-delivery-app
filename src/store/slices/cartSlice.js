import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    restaurantInfo: "",
    cartItems: [],
    quantity: 0,
  },
  reducers: {
    addItem: (state, data) => {
      const { id, imageId, name, price, description, isVeg } = data.payload;
      const item = { id, imageId, name, price, description, isVeg, quantity: 1 };
      const newItems = [...state.cartItems];
      newItems.push(item);
      return {
        ...state,
        cartItems: newItems,
        quantity: state.quantity + 1,
      };
    },
    updateAddItem: (state, data) => {
      const id = data.payload;
      return {
        ...state,
        cartItems: state.cartItems.map(cartItem => {
            if(cartItem.id === id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1
                }
            } else {
                return cartItem;
            }
        }),
        quantity: state.quantity + 1,
      };
    },
    updateDeleteItem: (state, data) => {
      const id = data.payload;
      const item = state.cartItems.find((cartItem)=> cartItem.id === id);
      if(item && item.quantity == 1) {
        return {
            ...state,
            cartItems: state.cartItems.filter(cartItem => cartItem.id !== id),
            quantity: state.quantity == 1 ? 0 : state.quantity - 1,
            restaurantInfo: state.quantity == 1 ? "" : state.restaurantInfo
        }
      }
      return {
        ...state,
        cartItems: state.cartItems.map(cartItem => {
            if(cartItem.id === id) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity - 1
                    }
            } else {
                return cartItem;
            }
        }),
        quantity: state.quantity - 1,
      }
    },
    clearCart: (state) => {
      return {
        ...state,
        restaurantInfo: "",
        cartItems: [],
        quantity: 0,
      };
    },
    setRestaurantInfo: (state, data) => {
      return {
        ...state,
        restaurantInfo: data.payload,
      };
    },
  },
});
export const {
  addItem,
  clearCart,
  setRestaurantInfo,
  updateAddItem,
  updateDeleteItem,
} = cartSlice.actions;

export default cartSlice.reducer;
