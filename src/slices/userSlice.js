import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { batch: " ", classtime: " " },
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userLoginInfo: (state, actions) => {
      console.log(actions);
      state.value = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLoginInfo } = userSlice.actions;

export default userSlice.reducer;
