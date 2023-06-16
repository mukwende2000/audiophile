import { createSlice } from "@reduxjs/toolkit";

export interface MenuState {
  isActive: boolean;
}

const initialState: MenuState = {
  isActive: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isActive = true;
    },
    closeMenu: (state) => {
      state.isActive = false;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
