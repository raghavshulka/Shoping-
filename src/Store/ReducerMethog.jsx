import { createSlice } from "@reduxjs/toolkit";

const ReducerMethod = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addinitialItem: (state, action) => {
      return action.payload;
    },
  },
});

export default ReducerMethod;
export const itemsAction = ReducerMethod.actions;
