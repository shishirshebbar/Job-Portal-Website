import { configureStore } from "@reduxjs/toolkit";
import authorizedslice from "./authorizedslice";
import jobslice from "./jobslice"
const store= configureStore({
    reducer:{
        auth:authorizedslice,
        job:jobslice,
    }
})

export default store;