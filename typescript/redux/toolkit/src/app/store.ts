import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import counterSlice from '../features/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppDispatch = (): AppDispatch => useDispatch();

export default store;
