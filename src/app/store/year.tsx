import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialYearState = { year: dayjs().year().toString() };

export const yearSlice = createSlice({
    name: "year",
    initialState: initialYearState,
    reducers: {
        changeYear(state, action) {
            return { ...state, year: action.payload };
        },
    },
});

export const yearActions = yearSlice.actions;
