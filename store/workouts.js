import { createSlice } from "@reduxjs/toolkit";

const initialWorkoutState = { workouts: [] };

const workoutSlice = createSlice({
  name: "workout",
  initialState: initialWorkoutState,
  reducers: {
    addWorkout(state, action) {
      state.workouts.push(action.payload);
    },
    removeWorkout(state, action) {
      state.workouts.splice(action.payload, 1);
    },
  },
});

export const workoutActions = workoutSlice.actions

export default workoutSlice.reducer