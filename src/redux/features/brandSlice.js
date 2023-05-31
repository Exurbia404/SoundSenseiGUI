import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBrands = createAsyncThunk('fetchBrands', async () => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Brands`)
        return data
    } catch (error) {
        return isRejectedWithValue(error.response.data)
    }
})
export const getBrandById = createAsyncThunk('getBrandById', async (id) => {
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Brands/${id}`)
        return data
    } catch (error) {
        return isRejectedWithValue(error.response.data)
    }
})
export const brandSlice = createSlice({
    name: 'brand',
    initialState: {
        loading: false,
        brands: [],
        particularBrand : {},
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBrands.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchBrands.fulfilled, (state, action) => {
            state.loading = false
            state.brands = action.payload
        })
        builder.addCase(fetchBrands.rejected, (state, action) => {
            state.loading = false
            state.error = true
            console.log(action.payload);
        })
        builder.addCase(getBrandById.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getBrandById.fulfilled, (state, action) => {
            state.loading = false
            state.particularBrand = action.payload
        })
        builder.addCase(getBrandById.rejected, (state, action) => {
            state.loading = false
            state.error = true
            console.log(action.payload);
        })
    }
})

export default brandSlice.reducer