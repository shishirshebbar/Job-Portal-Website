import { createSlice } from "@reduxjs/toolkit";

const jobslice = createSlice({
    name:"job",
    initialState:{
        alljobs:[],
        alladminjobs:[],
        singlejob:null,
        searchjob:""
    },
    reducers:{
        setalljobs:(state,action)=>{
            state.alljobs=action.payload
        },
        setsinglejob:(state,action)=>{
            state.singlejob=action.payload;
        },
        setalladminjobs:(state,action)=>{
            state.alladminjobs  = action.payload
        },
        
        setsearchjob:(state,action)=>{
            state.searchjob  = action.payload
        },
    }
})

export const {setalljobs,setsinglejob,setalladminjobs,setsearchjob} = jobslice.actions;
export default jobslice.reducer;