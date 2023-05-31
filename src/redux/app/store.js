import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from '../features/userSlice'
import brandSliceReducer from '../features/brandSlice'
import productSliceReducer from "../features/productSlice";

export const store = configureStore({
    reducer:{
        userLogin : userLoginReducer,
        getBrands : brandSliceReducer,
        productsReducer : productSliceReducer
    }
})