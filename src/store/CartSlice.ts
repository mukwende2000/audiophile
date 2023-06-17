import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../utils/ProductType";

export interface CartItem {
  item: Product;
  quantity: number;
  totalPrice: number;
}

export interface InitialState {
  isOpen: boolean;
  cart: CartItem[];
  total: number;
}

const initialState = {
  isOpen: false,
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggle: (state) => {
      if (state.isOpen) {
        state.isOpen = false;
      } else {
        state.isOpen = true;
      }
    },
    add: (state, action: PayloadAction<object>): void => {
      const isInCart = state.cart.some(
        (item: CartItem) => item.item.id === action.payload.item.id
      );
      if (isInCart) {
        state.cart;
      } else {
        state.cart.push(action.payload);
      }
    },
    increaseQuantity: (state, action: PayloadAction<object>) => {
      state.cart.map((item: CartItem) => {
        if (item.item.id === action.payload.id) {
          item.quantity += 1;
          item.totalPrice = item.item.price * item.quantity;
        }
      });
    },
    decreaseQuantity: (state, action: PayloadAction<object>) => {
      state.cart.map((item: CartItem) => {
        if (item.item.id === action.payload.id) {
          if (item.quantity === 1) {
            state.cart.splice(state.cart.indexOf(item), 1);
          } else {
            item.quantity -= 1;
            item.totalPrice = item.item.price * item.quantity;
          }
        }
      });
    },
    calculateTotal: (state) => {
      state.total = state.cart.reduce((totalVal, item) => {
        return totalVal + item.totalPrice;
      }, 0);
    },
    clear: (state) => {
      state.cart.length = 0;
    },
  },
});

export const {
  toggle,
  clear,
  add,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
