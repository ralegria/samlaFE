import { configureStore } from "@reduxjs/toolkit";
import customerSlices from "./slices/CustomerSlice";

const store = configureStore({
  reducer: {
    customerForm: customerSlices,
  },
});

export default store;
