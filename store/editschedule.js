import { createSlice } from "@reduxjs/toolkit";

const initialEditScheduleState = { editSchedule: false };

const editScheduleSlice = createSlice({
  name: "editSchedule",
  initialState: initialEditScheduleState,
  reducers: {
    editOn(state) {
      state.editSchedule = true;
    },
    editOff(state) {
      state.editSchedule = false;
    },
  },
});

export const editScheduleActions = editScheduleSlice.actions;

export default editScheduleSlice.reducer;
