import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: State, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: (state: State, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
    reset: (state: State, action: PayloadAction<number>) => {
      state.count = 0;
    },
  },
});

export default counterSlice;

export const { decrement, increment, reset } = counterSlice.actions;
