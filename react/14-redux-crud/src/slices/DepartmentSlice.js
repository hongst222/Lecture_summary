/**
 * 이 작업이 수행되기 위해서 ../helper/ReudxHelper.js 의 작업이 선행 되어야함.
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pending, fulfilled, rejected } from "../helper/ReduxHelper";
import { cloneDeep } from 'lodash';


/** 비동기 처리 함수 구현 */
//  payload는 이 함수를 호출할 때 전달되는 파라미터.
// 다중행 데이터 조회
export const getList = createAsyncThunk("DepartmentSlice/getList", async (payload, { rejectWithValue }) => {
    let result = null;

    //  환경설정 파일에 정의된 URL에서 ':id'부분을 찾아 payload를 통해 전달된 일련번호로 치환
    const API_URL = process.env.REACT_APP_API_DEPARTMENT_LIST;

    //  /pages/DepartmentList.js에서 검색어를 {keyword: 검색어값} 형태로 전달하면 payload객체를 통해 넘어온다.
    //  --> payload.keyword
    //  여기서는 그 값을 확과명 검색어로 활용
    let params = null;
    // payload 객체가 null이나 undefined가 아니고 그 안의 keyword 값이 존재한다면?
    if (payload?.keyword) {
        // axios에 설정할 querystring 데이터 구성
        params = {
            dname: payload.keyword
        }
    }
    try {
        const response = await axios.get(API_URL, {
            params: params
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});
// 단일행 데이터 조회
export const getItem = createAsyncThunk("DepartmentSlice/getItem", async (payload, { rejectWithValue }) => {
    let result = null;

    //  환경설정 파일에 정의된 URL에서 ':id'부분을 찾아 payload를 통해 전달된 일련번호로 치환
    const API_URL = process.env.REACT_APP_API_DEPARTMENT_ITEM.replace(':id', payload.id);

    try {
        const response = await axios.get(API_URL);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});

// 데이터 추가
export const postItem = createAsyncThunk("DepartmentSlice/postItem", async (payload, { rejectWithValue }) => {
    let result = null;

    //  환경설정 파일에 정의된 URL에서 ':id'부분을 찾아 payload를 통해 전달된 일련번호로 치환
    const API_URL = process.env.REACT_APP_API_DEPARTMENT_LIST;

    try {
        const response = await axios.post(API_URL, {
            dname: payload.dname,
            loc: payload.loc
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});

//  데이터 수정
export const putItem = createAsyncThunk("DepartmentSlice/putItem", async (payload, { rejectWithValue }) => {
    let result = null;

    const API_URL = process.env.REACT_APP_API_DEPARTMENT_LIST;

    try {
        const response = await axios.put(API_URL, {
            dname: payload.dname,
            loc: payload.loc
        });
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});

//  데이터 삭제
export const deleteItem = createAsyncThunk("DepartmentSlice/deleteItem", async (payload, { rejectWithValue }) => {
    let result = null;

    //  환경설정 파일에 정의된 URL에서 ':id'부분을 찾아 payload를 통해 전달된 일련번호로 치환
    const API_URL = process.env.REACT_APP_API_DEPARTMENT_ITEM.replace(':id', payload.id);

    try {
        const response = await axios.delete(API_URL);
        result = response.data;
    } catch (err) {
        result = rejectWithValue(err.response);
    }
    return result;
});

/** Slice 정의   */
const DepartmentSlice = createSlice({
    name: 'DepartmentSlice',
    initialState: {
        data: null,
        loading: false,
        error: null
    },

    //  외부 action 및 비동기 action (Ajax용)
    //  동기 : reducers
    //  비동기: extraReducers
    reducers: {
        getCurrentData: (state, action) => {
            return state;
        }
    },
    extraReducers: {

        // 로딩중임을 표시

        [getList.pending]: pending,
        [getList.fulfilled]: fulfilled,
        [getList.rejected]: rejected,


        [getItem.pending]: pending,
        [getItem.fulfilled]: (state, { meta, payload }) => {
            return {
                //  전체적으로 데이터가 배열이지만, 단일행 조회의 경우 단건의 데이터만 응답결과로 수신되므로, 
                //배열로 묶어서 처리한다.
                data: [payload],
                loading: false,
                error: null
            }
        },
        [getItem.rejected]: rejected,

        [postItem.pending]: pending,
        [postItem.fulfilled]: (state, { meta, payload }) => {
            //  기존의 상태값을 복사한다. (원본이 JSON이므로 깊은 복사를 수행해야 한다.)
            const data = cloneDeep(state.data);
            console.log(data);

            data.push(payload);
            
            return {
                data: data,
                loading: false,
                error: null
            }
        },
        [postItem.rejected]: rejected,


        [putItem.pending]: pending,
        [putItem.fulfilled]: fulfilled,
        [putItem.rejected]: rejected,


        [deleteItem.pending]: pending,
        [deleteItem.fulfilled]: fulfilled,
        [deleteItem.rejected]: rejected
    },
});

export const { getCurrentData } = DepartmentSlice.actions;
export default DepartmentSlice.reducer;