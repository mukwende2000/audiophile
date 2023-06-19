import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CartSlice";
import MenuReducer from "./MenuSlice";
import FormSlice from "./FormSlice";

export const store = configureStore({
  reducer: {
    cart: CounterReducer,
    menu: MenuReducer,
    form: FormSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
