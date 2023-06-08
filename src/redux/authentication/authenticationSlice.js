import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
} from './authenticationOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isLoadingUser: false,
  error: null,
};

/*
export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = payload.user;
      toast.success('Successfully registered!', {
        theme: 'dark',
      });
    },
    [registerUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      toast.error('Something is wrong, try again!', {
        theme: 'dark',
      });
    },
    [loginUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = payload.token;
      state.user = payload.user;
      toast.success('Successfully logged in!', {
        theme: 'dark',
      });
    },
    [loginUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      toast.error('Something is wrong, try again!', {
        theme: 'dark',
      });
    },
    [logoutUser.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logoutUser.fulfilled](state) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = { name: null, email: null };
      state.token = null;
      toast.success('Successfully logged out! Waiting for you to come back!', {
        theme: 'dark',
      });
    },
    [logoutUser.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
      toast.error('Something is wrong, try again later!', {
        theme: 'dark',
      });
    },
    [fetchCurrentUser.pending](state) {
      state.isLoadingUser = true;
      state.error = null;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.isLoadingUser = false;
      state.isLoggedIn = true;
      state.user = payload;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.isLoadingUser = false;
      state.error = payload;
    },
  },
});
*/

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers:
    builder => {
    
      builder.addCase(registerUser.pending, (state) => {
         state.isLoading = true;
         state.error = null;
      });
      
      builder.addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
        toast.success('Successfully registered!', {
          theme: 'dark',
        });
      });

      builder.addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        toast.error('Something is wrong, try again!', {
          theme: 'dark',
        });
      });
    
      builder.addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });

    
      builder.addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
        toast.success('Successfully logged in!', {
          theme: 'dark',
        });
      });
      
      builder.addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        toast.error('Something is wrong, try again!', {
          theme: 'dark',
        });
      });
    

      builder.addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
  
      builder.addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
        toast.success('Successfully logged out! Waiting for you to come back!', {
          theme: 'dark',
        });
      });
    
      builder.addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        toast.error('Something is wrong, try again later!', {
          theme: 'dark',
        });
      });
  
      builder.addCase(fetchCurrentUser.pending, (state) => {
        state.isLoadingUser = true;
        state.error = null;
      });

      builder.addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoadingUser = false;
        state.isLoggedIn = true;
        state.user = payload;
      });
   
      builder.addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.isLoadingUser = false;
        state.error = payload;
      });
    }
});
    
export const getAuthentication = state => state.authentication;
