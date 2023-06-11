import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({ name: "ryan beasley" });
      state.push({ name: "john Smith" });
    },
  },
});
export default slice.reducer;

export const { getUser } = slice.actions;
