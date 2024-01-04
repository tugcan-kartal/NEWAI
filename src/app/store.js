import {configureStore} from "@reduxjs/toolkit";
import newsSlice from "../features/newsSlice";

export default configureStore({
    reducer: {
        newsReducer: newsSlice,
    }
})