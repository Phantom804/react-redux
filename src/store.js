import { configureStore } from "@reduxjs/toolkit";
import customReducer from "./Reducers.js";

const store = configureStore({
    reducer: {
        custom: customReducer,
    },
});

export default store