import { configureStore } from "@reduxjs/toolkit";
import energyReducer from "./energySlice";

export const store = configureStore({
    reducer:{
        energyMeter:energyReducer,
    }
})