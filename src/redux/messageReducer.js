import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  message_data: '',
  status: '',
  error: null,
};

const FETCH_URL = 'http://localhost:3000/api/v1/messages';

export const getRandomGreeting = createAsyncThunk('Random Message', async () => {
  const response = await axios.get(FETCH_URL);
  return response.data.message;
});

const messageSlice = createSlice({
  name: 'Messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomGreeting.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        message_data: action.payload,
      }))
      .addCase(getRandomGreeting.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default messageSlice.reducer;
