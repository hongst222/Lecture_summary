import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {pending, fulfilled,rejected} from '../helper/ReduxHelper';

export const getDepartmentList = createAsyncThunk("DepartmentSlice/getDepartmentList", async(payload, {rejectWithValue}) => {
    let result = null;
    const URL = process.env.REACT_APP_API_DEPARTMENT_LIST;
    try{
        const response = await axios.get(URL);
        result= response.data;
    } catch(e){
        result = rejectWithValue(e.response);
    }

    return result;
});

const DepartmentSlice = createSlice({
    name: 'DepartmentSlice',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    extraReducers: {
        [getDepartmentList.pending] : pending,
        [getDepartmentList.fulfilled] : fulfilled,
        [getDepartmentList.rejected] : rejected
    }
});

export default DepartmentSlice.reducer;