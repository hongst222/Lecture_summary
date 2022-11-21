import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pending, fulfilled, rejected } from "../helper/ReduxHelper";


export const getList = createAsyncThunk("CovidSlice/getList", async (payload, { rejectWithValue }) => {
  let result = null;
  const URL = process.env.REACT_APP_API_COVID19_LIST.replace(":range",payload.range);
  let params = null;

  try {
    const response = await axios.get(URL);
    
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
  
    reducers: {
      getCurrentData: (state, action) => {
        return state;
      },
    },

    extraReducers: {
        /** 다중행 데이터 조회를 위한 액션 함수 */
        [getList.pending]: pending,
        [getList.fulfilled]: fulfilled,
        [getList.rejected]: rejected,
    }
    
});

export const { getCurrentData } = CovidSlice.actions;
export default CovidSlice.reducer;