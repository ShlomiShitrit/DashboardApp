import { configureStore } from "@reduxjs/toolkit";
import { ordersSlice } from "./orders";
import { yearSlice } from "./year";
import { categoriesSlice } from "./categories";
import { namesSlice } from "./names";
import { isStateSlice } from "./isState";

const store = configureStore({
    reducer: {
        orders: ordersSlice.reducer,
        year: yearSlice.reducer,
        categories: categoriesSlice.reducer,
        names: namesSlice.reducer,
        isState: isStateSlice.reducer,
    },
});

export default store;
