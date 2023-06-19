import { createSlice } from "@reduxjs/toolkit";

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
    setIsSubmitting: (state) => {
      state.isSubmitting = !state.isSubmitting;
    },
    setIsSubmitted: (state) => {
      state.isSubmitted = !state.isSubmitted;
    },
  },
});
export const { setIsSubmitting, setIsSubmitted } = FormSlice.actions;
export default FormSlice.reducer;
