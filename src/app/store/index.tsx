import { configureStore } from "@reduxjs/toolkit";
import { ordersSlice } from "./orders";
import { yearSlice } from "./year";

const store = configureStore({
    reducer: {
        orders: ordersSlice.reducer,
        year: yearSlice.reducer,
    },
});

export default store;
