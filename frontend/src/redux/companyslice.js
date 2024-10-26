
import { createSlice } from "@reduxjs/toolkit";

const companyslice=createSlice({
    name:"company",
    initialState:{
        singlecompany:null,
        companies:[],
        searchcompany:"",
    },
    reducers:{
        setsinglecompany:(state,action)=>{
            state.singlecompany=action.payload
        },
        setcompanies:(state,action)=>{
            state.companies=action.payload
        },
        setsearchcompany:(state,action)=>{
            state.searchcompany=action.payload
        }

    }
});
export const {setsinglecompany,setcompanies,setsearchcompany}  = companyslice.actions;
export default companyslice.reducer