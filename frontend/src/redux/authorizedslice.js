import { createSlice } from "@reduxjs/toolkit";

const authorizedslice = createSlice({
    name:"auth",
    initialState:{
        loading:false,
        user:null
    },
    reducers:{
        setloading:(state,action)=>{
            state.loading=action.payload;
        },
        setuser:(state,action)=>{
            state.user= action.payload
        }
    }
})

export const {setloading, setuser}  = authorizedslice.actions;
export default authorizedslice.reducer;