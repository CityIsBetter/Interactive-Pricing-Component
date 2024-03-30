import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState:{
        pageViews: 3
    },
    reducers: {
        change: (state, amount) => {
            state.pageViews = amount.payload;
        }
    }
});

export const { change } = counterSlice.actions;

export default counterSlice.reducer;