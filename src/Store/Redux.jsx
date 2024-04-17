import { configureStore } from "@reduxjs/toolkit";
import ReducerMethod from "./ReducerMethog";
import fetchStatusSlice from "./fetchStatusSlice";
import Bagslice from "./BagSlice";
const store = configureStore({
  reducer: {
    item: ReducerMethod.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag  : Bagslice.reducer
  },
});

export default store;
