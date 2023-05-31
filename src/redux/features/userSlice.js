import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUserById = createAsyncThunk('fetchUserById', async (id) => {
    try {
        console.log(id);
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Users/${id}`)
        localStorage.setItem('brand', JSON.stringify(data))
        console.log(data);
        return data
    } catch (error) {
        return isRejectedWithValue(error.response.data.message)
    }
})
export const createUser = createAsyncThunk('createUser', async (userObject) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/Users`,userObject)
        localStorage.setItem('brand', JSON.stringify(data))
        return data
    } catch (error) {
        return isRejectedWithValue(error.response.data.message)
    }
})
export const fetchLogin = createAsyncThunk('fetchLogin', async (params) => {
    const {email,password} = params
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/Authenticate?email=${email}&password=${password}`);
        return data
    } catch (error) {
        return isRejectedWithValue(error.response.data.message)
    }
})
export const userLogout = createAsyncThunk('userLogout', async () => {
    localStorage.removeItem('brand')
    return {}
})

const userInfoStorage = localStorage.getItem('brand') ? JSON.parse(localStorage.getItem('brand')) : {}
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: userInfoStorage,
        userId : null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
        })
        builder.addCase(fetchUserById.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        builder.addCase(fetchLogin.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.loading = false
            state.userId = action.payload
        })
        builder.addCase(fetchLogin.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            console.log(action.payload);
        })
        builder.addCase(createUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            console.log(action.payload);
        })
        builder.addCase(userLogout.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(userLogout.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.userId = null
        })
        builder.addCase(userLogout.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            console.log(action.payload);
        })
    }
})

export default userSlice.reducer