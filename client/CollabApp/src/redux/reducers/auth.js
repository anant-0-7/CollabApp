import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        userExists:(state,action)=>{
            state.user=action.payload;
          
        },
        userNotExists:(state)=>{
            state.user=null;
        
        }
    }
});

export const {userExists,userNotExists}=authSlice.actions;
export default authSlice;