import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      return action.payload;
    },
    loggedOut: (state, action) => {
      state.email = null;
      state.name = null;
      state.accessToken = null;
    },
  },
});

export default authSlice.reducer;
export const { loggedIn, loggedOut } = authSlice.actions;

export const selectUser = (state) => {
  const auth = state.auth;

  return {
    name: auth.name,
    email: auth.email,
  };
};
