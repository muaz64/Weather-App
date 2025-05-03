import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';  

// Async thunk to fetch weather data
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
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
    setCity: (state, action) => {
      state.city = action.payload;
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
      
        const cityName = action.payload.name;
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

export const { setCity } = weatherSlice.actions;
export default weatherSlice.reducer;
