import { configureStore } from "@reduxjs/toolkit";
import authorizedslice from "./authorizedslice";
const store= configureStore({
    reducer:{
        auth:authorizedslice
    }
})
export default store;