import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
// state 타입
type CounterState = {
  count: number;
};

// payload 타입
type CounterPayload = {
  diff: number;
};

// 초기 state
const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state: CounterState) => {
      state.count = state.count + 1;
    },
    decrease: (state: CounterState) => {
      state.count = state.count - 1;
    },
    // PayloadAction 타입 명시
    increaseByDiff: (
      state: CounterState,
      action: PayloadAction<CounterPayload>
    ) => {
      state.count = state.count + action.payload.diff;
    },
    decreaseByDiff: (
      state: CounterState,
      action: PayloadAction<CounterPayload>
    ) => {
      state.count = state.count - action.payload.diff;
    },
  },
});

// 액션 생성자 함수들을 추출
export const { increase, decrease, increaseByDiff, decreaseByDiff } =
  counterSlice.actions;

// 커스텀 Hook
export const useCounter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return {
    count,
    dispatch,
  };
};

export default counterSlice.reducer;
