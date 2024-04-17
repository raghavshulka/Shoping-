import { createSlice } from "@reduxjs/toolkit";

const Bagslice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addtoBag: (state, action) => {
      state.push(action.payload);
    },
    removeBag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});
export default Bagslice;
 export const bagAction = Bagslice.actions;
