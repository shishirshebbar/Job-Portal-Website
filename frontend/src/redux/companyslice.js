
import { createSlice } from "@reduxjs/toolkit";

const companyslice=createSlice({
    name:"company",
    initialState:{
        singlecompany:null
    },
    reducers:{
        setsinglecompany:(state,action)=>{
            state.singlecompany=action.payload
        }
    }
});
export const {setsinglecompany}  = companyslice.actions;
export default companyslice.reducer