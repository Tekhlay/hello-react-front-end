import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './messageReducer';

const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

export default store;
