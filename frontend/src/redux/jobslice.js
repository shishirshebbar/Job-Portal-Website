import { createSlice } from "@reduxjs/toolkit";

const jobslice = createSlice({
    name:"job",
    initialState:{
        alljobs:[],
        singlejob:null,
    },
    reducers:{
        setalljobs:(state,action)=>{
            state.alljobs=action.payload
        },
        setsinglejob:(state,action)=>{
            state.singlejob=action.payload;
        }
    }
})

export const {setalljobs,setsinglejob} = jobslice.actions;
export default jobslice.reducer;