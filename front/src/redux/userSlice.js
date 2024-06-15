import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: { login: false, user: { id: user.id } },
  userAppointments: [],
};

const userSlice = createSlice({
  name: "actualUser",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload, login: true };
    },
    // setUserData: (state, action) => {
    //   state.userData = action.payload;
    // },
    setUserAppointments: (state, action) => {
      state.userAppointments = action.payload;
    },
  },
});

export const { setUserData, setUserAppointments } = userSlice.actions;
export default userSlice.reducer;
