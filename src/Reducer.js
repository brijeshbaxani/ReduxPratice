import { createReducer } from "@reduxjs/toolkit";

const initialState ={
    companyListArray:[],
    employListArray:[]
}

export const customReducer = createReducer(initialState,{
    AddCompanyData:(state,action)=>{
        state.companyListArray.push(action.payload);
    },
    AddEmploayData:(state,action)=>{
        state.employListArray.push(action.payload)
    }
});