import { combineReducers, configureStore } from "@reduxjs/toolkit";
import messageSlice from "./messageReducer";

const reducer = combineReducers({
    messages: messageSlice,
});

const store = configureStore({
    reducer,
});

export default store;

