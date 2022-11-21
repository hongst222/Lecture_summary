import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pending, fulfilled, rejected } from "../helper/ReduxHelper";
import { cloneDeep } from "lodash";

export const getList = createAsyncThunk("CovidSlice/getList", async (payload, { rejectWithValue }) => {
  let result = null;
  const URL = process.env.REACT_APP_API_STUDENT_LIST;

  
  let params = null;

  if (payload?.keyword) {
    params = {
      
      name: payload.keyword,
    };
  }

  try {
    const response = await axios.get(URL, { params: params });
    result = response.data;
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

const CovidSlice = createSlice({
    name: 'CovidSlice',
    initialState:{
        data:null,
        loading: false,
        error: null,
    },
  
    extraReducers: {
        /** 다중행 데이터 조회를 위한 액션 함수 */
        [getList.pending]: pending,
        [getList.fulfilled]: fulfilled,
        [getList.rejected]: rejected,
    }
    
});


export default CovidSlice.reducer;