import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../utils/ProductType";
import { toast } from "react-toastify";

export interface CartItem {
  product: Product;
  quantity: number;
  totalPrice: number;
}
export interface AddCartItemPayload {
  id: number;
  payload: CartItem;
}

export interface UpdateCartItemPayload {
  id: number;
  name: any;
  payload: {
    id: string;
    name: string;
  };
}
export interface CartState {
  isOpen: boolean;
  cartList: CartItem[];
  total: number;
  buttonState: "on" | "off";
  checkedout: boolean;
}

const initialState: CartState = {
  isOpen: false,
  buttonState: "off",
  cartList: [],
  total: 0,
  checkedout: false,
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
    add: (state, action): void => {
      const isInCart = state.cartList.some(
        (item: CartItem) => item.product.id === action.payload.product.id
      );
      if (isInCart) {
        state.cartList;
      } else {
        state.cartList.push(action.payload);
        if (state.buttonState === "off") state.buttonState = "on";
        toast.success(`${action.payload.product.name} added to cart`);
      }
    },
    increaseItemQuantity: (
      state,
      action: PayloadAction<AddCartItemPayload>
    ) => {
      state.cartList.map((item: CartItem) => {
        if (item.product.id === action.payload.id) {
          item.quantity += 1;
          item.totalPrice = item.product.price * item.quantity;
        }
      });
    },
    decreaseItemQuantity: (
      state,
      action: PayloadAction<UpdateCartItemPayload>
    ) => {
      state.cartList.map((item: CartItem) => {
        if (state.cartList.length === 1 && item.quantity === 1)
          state.buttonState = "off";

        if (item.product.id === action.payload.id) {
          if (item.quantity === 1) {
            state.cartList.splice(state.cartList.indexOf(item), 1);
            toast.info(`${action.payload.name} removed from the cart`);
          } else {
            item.quantity -= 1;
            item.totalPrice = item.product.price * item.quantity;
          }
        }
      });
    },
    calculateTotal: (state) => {
      state.total = state.cartList.reduce((totalVal, item) => {
        return totalVal + item.totalPrice;
      }, 0);
    },
    clear: (state) => {
      state.cartList.length = 0;
      state.isOpen = false;
      state.buttonState = "off";
      toast.success("Successfully cleared, your cart is empty");
    },
    checkout: (state) => {
      state.checkedout = true;
    },
  },
});

export const {
  toggle,
  clear,
  add,
  increaseItemQuantity,
  decreaseItemQuantity,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
