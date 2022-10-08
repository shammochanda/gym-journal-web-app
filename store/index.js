import { configureStore } from "@reduxjs/toolkit";
import workoutReducer from './workouts'
import authReducer from './auth'
import editScheduleReducer from "./editschedule";

const store = configureStore({
    reducer: {workout: workoutReducer, auth: authReducer, editSchedule: editScheduleReducer }
});


export default store;