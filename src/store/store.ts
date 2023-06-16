import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CartSlice";
import MenuReducer from "./MenuSlice";

export const store = configureStore({
  reducer: {
    cart: CounterReducer,
    menu: MenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
