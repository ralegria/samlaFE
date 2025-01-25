import { createSlice } from "@reduxjs/toolkit";
import { STEPS } from "../../../constants";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    formStep: 1,
    formData: {
      names: null,
      lastnames: null,
      email: null,
      phone_number: null,
      ID_type: "DUI",
      ID_number: null,
      address_line1: null,
      address_line2: null,
      state: null,
      city: null,
      mo_earnings: null,
      ID_photo_front: null,
      ID_photo_back: null,
      selfie: null,
    },
  },
  reducers: {
    updateField: (state, action) => {
      state.formData = { ...state.formData, ...action.payload.step };
    },
    setStep: (state, action) => {
      const currentStep = Number(state.formStep);
      state.formStep =
        action.payload === STEPS.BACKWARD ? currentStep - 1 : currentStep + 1;
    },
  },
});

export const { updateField, setStep } = customerSlice.actions;

export default customerSlice.reducer;
