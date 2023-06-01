import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk('fetchAllProducts', async (brandId) => {
    try {
        let tempData
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Products`)
        tempData = typeof(brandId) === 'number' ? data.filter((prod)=> prod.brand_id == brandId) : brandId === 'Ascending' ? data.sort((a,b) => a.name > b.name ? 1 : -1) : brandId === 'Descending' ? data.sort((a,b) => a.name < b.name ? 1 : -1) : data.filter((prod)=> prod.brand_id != brandId)
        console.log(tempData);
        return tempData
    } catch (error) { 
        return isRejectedWithValue(error.response.data)
    }
})

export const getProductById = createAsyncThunk('getProductById', async (id) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Products/${id}`)
        return data
    } catch (error) {
        return isRejectedWithValue(error.response.data)
    }
})
export const productSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        products: [],
        particularProduct : {},
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.loading = false
            state.error = true
            console.log(action.payload);
        })
        builder.addCase(getProductById.pending, (state, action) => {
            state.loading = true
            state.particularProduct = {}
        })
        builder.addCase(getProductById.fulfilled, (state, action) => {
            state.loading = false
            state.particularProduct = action.payload
        })
        builder.addCase(getProductById.rejected, (state, action) => {
            state.loading = false
            state.error = true
            console.log(action.payload);
        })
    }
})

export default productSlice.reducer