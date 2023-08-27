import { createSlice } from "@reduxjs/toolkit";

const initialOrdersState = { isSubmit: false };

export const ordersSlice = createSlice({
    name: "orders",
    initialState: initialOrdersState,
    reducers: {
        submit(state) {
            return { ...state, isSubmit: !state.isSubmit };
        },
    },
});

export const ordersActions = ordersSlice.actions;
