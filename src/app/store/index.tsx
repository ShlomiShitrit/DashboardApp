import { configureStore } from "@reduxjs/toolkit";
import { ordersSlice } from "./orders";
import { yearSlice } from "./year";
import { categoriesSlice } from "./categories";

const store = configureStore({
    reducer: {
        orders: ordersSlice.reducer,
        year: yearSlice.reducer,
        categories: categoriesSlice.reducer,
    },
});

export default store;
