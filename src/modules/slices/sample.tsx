import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import asyncThunk from "../../utils/thunk";
import { _sampleGetCount } from "../api/sample";
import { SampleState } from "../type/sample";

// init state
const initialState: SampleState = {
  count: 0,
  isUpdateCheck: false,
};

// api Action
const NAME = "SAMPLE";
export const getCount = asyncThunk<{ count: number }>(`${NAME}/GET/COUNT`, _sampleGetCount as any);

// action + reducer
const SampleSlice = createSlice({
  name: NAME, // 액션의 경로를 잡아줄 이름
  initialState,
  reducers: {
    onChangeCount(state, action: PayloadAction<SampleState["count"]>) {
      state.count = action.payload;
    },
    initCount(state) {
      state.count = 0;
    },
    setIsUpdateCheck(state, action: PayloadAction<SampleState["isUpdateCheck"]>) {
      state.isUpdateCheck = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCount.pending, (state, action) => {
      //
    });
    builder.addCase(getCount.fulfilled, (state, action) => {
      state.count = action.payload.count;
    });
    builder.addCase(getCount.rejected, (state, action) => {
      state.count = -1;
    });
  },
});

export const { onChangeCount, initCount, setIsUpdateCheck } = SampleSlice.actions;
export default SampleSlice.reducer;
