/**
 * 이 단계를 수행하기 위해서는 ../helper/ReduxHelper.js의 작업이 선행되어야 한다.
 */
 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 import axios from "axios";
 import { pending, fulfilled, rejected } from "../helper/ReduxHelper";
 import { cloneDeep } from "lodash";
 
 /** 다중행 데이터 조회를 위한 비동기 함수 */
 export const getList = createAsyncThunk("StudentSlice/getList", async (payload, { rejectWithValue }) => {
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
 
 /** 단일행 데이터 조회를 위한 비동기 함수 */
 export const getItem = createAsyncThunk("StudentSlice/getItem", async (payload, { rejectWithValue }) => {
   let result = null;
 
   // 환경설정 파일에 정의된 URL에서 ':id' 부분을 찾아 payload를 통해 전달된 일련번호로 치환
   const URL = process.env.REACT_APP_API_STUDENT_ITEM.replace(":id", payload.id);
 
   try {
     const response = await axios.get(URL);
     result = response.data;
   } catch (err) {
     result = rejectWithValue(err.response);
   }
 
   return result;
 });
 
 /** 데이터 저장을 위한 비동기 함수 */
 export const postItem = createAsyncThunk("StudentSlice/postItem", async (payload, { rejectWithValue }) => {
   let result = null;
   const URL = process.env.REACT_APP_API_STUDENT_LIST;
   try {
     const response = await axios.post(URL, {
       name: payload.name,
       userid: payload.userid,
       grade: payload.grade,
       idnum: payload.idnum,
       birthdate: payload.birthdate,
       tel: payload.tel,
       height: payload.height,
       weight: payload.weight,
       deptno: payload.deptno,
       profno: payload.profno

     });
     result = response.data;
   } catch (err) {
     result = rejectWithValue(err.response);
   }
 
   return result;
 });
 
 /** 데이터 수정을 위한 비동기 함수 */
 export const putItem = createAsyncThunk("StudentSlice/putItem", async (payload, { rejectWithValue }) => {
   let result = null;
 
   // 환경설정 파일에 정의된 URL에서 ':id' 부분을 찾아 payload를 통해 전달된 일련번호로 치환
   const URL = process.env.REACT_APP_API_STUDENT_ITEM.replace(":id", payload.id);
 
   try {
     const response = await axios.put(URL, {
       id: null,
       name: payload.name,
       userid: payload.userid,
       grade: payload.grade,
       idnum: payload.idnum,
       birthdate: payload.birthdate,
       tel: payload.tel,
       height: payload.height,
       weight: payload.weight,
       deptno: payload.deptno,
       profno: payload.profno
     });
     result = response.data;
   } catch (err) {
     result = rejectWithValue(err.response);
   }
 
   return result;
 });
 
 /** 데이터 삭제를 위한 비동기 함수 */
 export const deleteItem = createAsyncThunk("StudentSlice/deleteItem", async (payload, { rejectWithValue }) => {
   let result = null;
 
   // 환경설정 파일에 정의된 URL에서 ':id' 부분을 찾아 payload를 통해 전달된 일련번호로 치환
   const URL = process.env.REACT_APP_API_STUDENT_ITEM.replace(":id", payload.id);
 
   try {
     const response = await axios.delete(URL);
     result = response.data;
   } catch (err) {
     result = rejectWithValue(err.response);
   }
 
   return result;
 });
 
 const StudentSlice = createSlice({
   name: "StudentSlice",
   initialState: {
     data: null,
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
     /** 단일행 데이터 조회를 위한 액션 함수 */
     [getItem.pending]: pending,
     [getItem.fulfilled]: (state, { meta, payload }) => {
       return {
         // 전체적으로 데이터가 배열이지만, 단일행 조회의 경우 단건의 데이터만 응답결과로 수신되므로,
         // 배열로 묶어서 처리한다.
         data: [payload],
         loading: false,
         error: null,
       };
     },
     [getItem.rejected]: rejected,
     /** 데이터 저장을 위한 액션 함수 */
     [postItem.pending]: pending,
     [postItem.fulfilled]: (state, { meta, payload }) => {
       // 기존의 상태값을 복사한다. (원본이 JSON이므로 깊은 복사를 수행해야 한다.)
       const data = cloneDeep(state.data);
       console.log(data);
 
       // 새로 저장된 결과를 기존 상태값 배열의 맨 뒤에 추가한다.
       data.push(payload);
 
       return {
         data: data,
         loading: false,
         error: null,
       };
     },
     [postItem.rejected]: rejected,
     /** 데이터 수정을 위한 액션 함수 */
     [putItem.pending]: pending,
     [putItem.fulfilled]: (state, { meta, payload }) => {
       const data = cloneDeep(state.data);
 
       const targetId = data.findIndex((v, i) => v.id == meta.arg.id);
       console.log(targetId);
 
       data.splice(targetId, 1, payload);
 
       return {
         data: data,
         loading: false,
         error: null,
       };
     },
     [putItem.rejected]: rejected,
     /** 데이터 삭제를 위한 액션 함수 */
     [deleteItem.pending]: pending,
     [deleteItem.fulfilled]: (state, { meta, payload }) => {
       // 기존의 상태값을 복사한다. (원본이 JSON 이므로 깊은 복사를 수행해야 한다.)
       const data = cloneDeep(state.data);
 
       // id값이 일치하는 항목의 배열 인덱스를 찾는다.
       const targetId = data.findIndex((v, i) => v.id == meta.arg.id);
       console.log(targetId);
 
       // 해당 인덱스의 원소를 삭제한다.
       data.splice(targetId, 1);
 
       return {
         data: data,
         loading: false,
         error: null,
       };
     },
     [deleteItem.rejected]: rejected,
   },
 });
 
 export const { getCurrentData } = StudentSlice.actions;
 export default StudentSlice.reducer;