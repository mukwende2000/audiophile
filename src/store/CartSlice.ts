import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../utils/ProductType";
import { toast } from "react-toastify";

const cartList = JSON.parse(localStorage.getItem("cartList") as string) || [];

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
  buttonState: cartList.length > 0 ? "on" : "off",
  cartList,
  total: cartList.reduce((totalVal: number, item: CartItem) => {
    return totalVal + item.totalPrice;
  }, 0),
  checkedout: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      if (state.isOpen) {
        state.isOpen = false;
      } else {
        state.isOpen = true;
      }
    },
    addToCart: (state, action): void => {
      const isInCart = state.cartList.some(
        (item: CartItem) => item.product.id === action.payload.product.id
      );
      if (isInCart) {
        state.cartList;
        toast.error("Item is already in cart", { position: "top-center" });
      } else {
        state.cartList.push(action.payload);
        localStorage.setItem("cartList", JSON.stringify(state.cartList));
        toast.success(`${action.payload.product.name} added to cart`, {
          position: "top-center",
        });
        if (state.buttonState === "off") {
          state.buttonState = "on";
        }
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
            toast.info(`${action.payload.name} removed from the cart`, {
              position: "top-center",
            });
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
    clearCart: (state) => {
      state.cartList.length = 0;
      state.isOpen = false;
      state.buttonState = "off";
      toast.success("Successfully cleared, your cart is empty", {
        position: "top-center",
      });
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },
  },
});

export const {
  toggleCart,
  clearCart,
  addToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
