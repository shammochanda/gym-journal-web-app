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
  showModal: false,
  modalFill: {workout: "", exercises:[]}
};

const workoutSlice = createSlice({
  name: "workout",
  initialState: initialWorkoutState,
  reducers: {
    addWorkout(state, action) {
      state.workouts.push(action.payload);
    },
    removeWorkout(state, action) {
      let i = 0;
      for (; i < state.workouts.length; i++) {
        if(state.workouts[i]["workout"] === action.payload) {
          break;
        }
      }
      state.workouts.splice(i, 1);
    },
    addWorkoutToDay(state, action) {
      state.daysToWorkouts[action.payload.day].push(action.payload.workout);
    },
    removeWorkoutFromDay(state, action) {
      let i = 0;
      for (; i < state.daysToWorkouts[action.payload.day].length; i++) {
        if(state.daysToWorkouts[action.payload.day][i]["workout"] === action.payload.workout) {
          break;
        }
      }
      state.daysToWorkouts[action.payload.day].splice(i, 1);
    },
    updateSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    openModal(state, action) {
      state.showModal = true;
      state.modalFill["workout"] = action.payload.workout;
      state.modalFill["exercises"] = action.payload.exercises;
    },
    closeModal(state) {
      state.showModal = false;
    },
  },
});

export const workoutActions = workoutSlice.actions;

export default workoutSlice.reducer;
