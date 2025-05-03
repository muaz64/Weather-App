import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

// Async thunk to fetch weather data
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  }
);


interface WeatherState {
    city: string;
    data: any;
    loading: boolean;
    error: string | null;
    history: string[];
}

const initialState: WeatherState = {
    city: '',
    data: null,
    loading: false,
    error: null,
    history: JSON.parse(localStorage.getItem('weatherHistory') || '[]'),
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
      setCity: (state, action: PayloadAction<string>) => {
        state.city = action.payload;
      },
      clearHistory: (state) => {
        state.history = [];
        localStorage.removeItem('weatherHistory');
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchWeather.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchWeather.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
  
          const cityName = action.payload.city.name; 
          if (!state.history.includes(cityName)) {
            state.history.push(cityName);
            localStorage.setItem('weatherHistory', JSON.stringify(state.history));
          }
        })
        .addCase(fetchWeather.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to fetch weather';
        });
    },
  });
  

export const { setCity, clearHistory } = weatherSlice.actions;

export default weatherSlice.reducer;
