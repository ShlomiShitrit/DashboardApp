"use client";
import { createSlice } from "@reduxjs/toolkit";

interface IsStateInit {
    isAdded: boolean;
    isDelete: boolean;
}
const initialIsStateState: IsStateInit = {
    isAdded: false,
    isDelete: false,
};

export const isStateSlice = createSlice({
    name: "isState",
    initialState: initialIsStateState,
    reducers: {
        setIsAdded(state) {
            state.isAdded = !state.isAdded;
        },
        setIsDelete(state) {
            state.isDelete = !state.isDelete;
        },
    },
});

export const isStateActions = isStateSlice.actions;
