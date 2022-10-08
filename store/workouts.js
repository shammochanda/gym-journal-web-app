import { createSlice } from "@reduxjs/toolkit";

const initialWorkoutState = {
  workouts: [],
  daysToWorkouts: {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  },
  searchTerm: "",
};

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
    addWorkoutToDay(state, action) {
      state.daysToWorkouts[action.payload.day].push(action.payload.workout);
    },
    removeWorkoutFromDay(state, action) {
      state.daysToWorkouts[action.payload.day].splice(
        action.payload.workout,
        1
      );
    },
    updateSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const workoutActions = workoutSlice.actions;

export default workoutSlice.reducer;
