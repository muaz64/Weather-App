import { configureStore } from "@reduxjs/toolkit";
import fetchWeather from '../features/weatherSlice';

export const store = configureStore ({
    reducer: {
        weather: fetchWeather,
    }
});
export type RootstATE = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;