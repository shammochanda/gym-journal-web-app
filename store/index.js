import { configureStore } from "@reduxjs/toolkit";
import workoutReducer from './workouts'
import authReducer from './auth'

const store = configureStore({
    reducer: {workout: workoutReducer, auth: authReducer }
});


export default store;