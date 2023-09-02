import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "@/app/GeneralResources/resources";

const initialCategoriesState: string[] = CATEGORIES;

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialCategoriesState,
    reducers: {
        addCategory(state, action) {
            state.push(action.payload);
        },
        deleteCategory(state, action) {
            state.splice(action.payload, 1);
        },
    },
});

export const categoriesActions = categoriesSlice.actions;
