import { createSlice } from "@reduxjs/toolkit";

const authorizedslice = createSlice({
    name:"auth",
    initialState:{
        loading:false
    },
    reducers:{
        setloading:(state,action)=>{
            state.loading=action.payload;
        }
    }
})

export const {setloading}  = authorizedslice.actions;
export default authorizedslice.reducer;