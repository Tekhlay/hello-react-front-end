import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "localhost:3000/api/v1/messages";

export const fetchMessages = createAsyncThunk(
    "messages/fetchMessages",
    async () => {
        const response = await axios.get(url);
        return response.data;
    }
);

const initialState = {
    messages: [],
    status: "idle",
    error: null,
};

const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        messageAdded(state, action) {
            state.messages.push(action.payload);
        }
    },
    extraReducers: {
        [fetchMessages.pending]: (state, action) => {
            state.status = "loading";
        }
    }
});

export const { messageAdded } = messageSlice.actions;

export default messageSlice.reducer;
