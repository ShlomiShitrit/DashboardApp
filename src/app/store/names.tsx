import { createSlice } from "@reduxjs/toolkit";

const initialNamesState: string[] = [];

export const namesSlice = createSlice({
    name: "names",
    initialState: initialNamesState,
    reducers: {
        addName(state, action) {
            state.push(action.payload);
        },
        deleteName(state, action) {
            state.splice(action.payload, 1);
        },
    },
});

export const namesActions = namesSlice.actions;
