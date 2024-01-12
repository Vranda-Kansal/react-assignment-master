import { configureStore } from "@reduxjs/toolkit";
import shiftReducer from "./shiftSlice";

const appStore = configureStore({
  reducer: {
    shifts: shiftReducer,
  },
});

export default appStore;
