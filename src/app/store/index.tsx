import { configureStore } from "@reduxjs/toolkit";
import { ordersSlice } from "./orders";

const store = configureStore({
    reducer: {
        orders: ordersSlice.reducer,
    },
});

export default store;
