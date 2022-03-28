import { createAsyncThunk } from "@reduxjs/toolkit";

// redux-toolkit에서 미들웨어 thunk 기능 util 추가
const asyncThunk = <T,>(actionType: string, callBack: (params: any) => T) => createAsyncThunk(actionType, callBack);
export default asyncThunk;
