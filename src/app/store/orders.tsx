"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialOrdersState = { isSubmit: false, isDelete: false };

export const ordersSlice = createSlice({
    name: "orders",
    initialState: initialOrdersState,
    reducers: {
        submit(state) {
            return { ...state, isSubmit: !state.isSubmit };
        },
        delete(state) {
            return { ...state, isDelete: !state.isDelete };

        },
    },
});

export const ordersActions = ordersSlice.actions;
