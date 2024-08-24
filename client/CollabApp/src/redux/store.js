import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/reducers/auth.js";
import api from "./api/api.js";

const store=configureStore({
    reducer:{
        [authSlice.name]:authSlice.reducer,
        [api.reducerPath]:api.reducer,
        
    },
    middleware:(defaultMiddleWare)=>[...defaultMiddleWare(),api.middleware],


});


export default store;