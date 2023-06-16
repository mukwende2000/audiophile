import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  isOpen: boolean;
  cart: object[];
}

const initialState = {
  isOpen: false,
  cart: [{}],
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

    clear: (state) => {
      state.cart.length = 0;
    },
  },
});

export const { toggle, clear } = cartSlice.actions;
export default cartSlice.reducer;
