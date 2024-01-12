import { createSlice } from "@reduxjs/toolkit";

const shiftSlice = createSlice({
  name: "shifts",
  initialState: {
    myshifts: [],
    bookedShifts: [],
    changeShift: "My shifts",
  },
  reducers: {
    addShifts: (state, action) => {
      state.myshifts.push(action.payload);
    },
    bookedShifts: (state, action) => {
      state.bookedShifts.push(action.payload);
    },
    changeShift: (state, action) => {
      state.changeShift = action.payload;
    },
  },
});

export const { addShifts, bookedShifts, changeShift } = shiftSlice.actions;
export default shiftSlice.reducer;
