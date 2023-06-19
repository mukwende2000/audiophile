import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FormState = {
  isSubmitting: boolean;
  isSubmitted: boolean;
};

const initialState: FormState = {
  isSubmitting: false,
  isSubmitted: false,
};

export const FormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setIsSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    setIsSubmitted: (state, action) => {
      state.isSubmitted = action.payload;
    },
  },
});
export const { setIsSubmitting, setIsSubmitted } = FormSlice.actions;
export default FormSlice.reducer;
