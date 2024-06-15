import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../redux/reducers/reducers";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: { actualUser: userSlice },
});

export default store;
