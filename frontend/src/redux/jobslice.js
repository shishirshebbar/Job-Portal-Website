import { createSlice } from "@reduxjs/toolkit";

const jobslice = createSlice({
    name:"job",
    initialState:{
        alljobs:[],
        alladminjobs:[],
        singlejob:null,
        searchjob:"",
        allappliedjobs:[],
        searchrequest:""
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
        setallappliedjobs:(state,action)=>{
            state.allappliedjobs= action.payload
        },
        setsearchrequest:(state,action)=>{
            state.searchrequest= action.payload
        }

    }
})

export const {setalljobs,setsinglejob,setalladminjobs,setsearchjob,setallappliedjobs,setsearchrequest} = jobslice.actions;
export default jobslice.reducer;