import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosSignUp, axiosLogIn, axiosGoogleLogIn, axiosLogOut, axiosRefresh, axiosGetUser } from 'api/auth';
import { axiosUserUpdateAccount } from 'api/user';

export const signUp = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosSignUp(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosLogIn(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const googleLogIn = createAsyncThunk(
  'auth/googlelogin',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosGoogleLogIn(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const {
        auth: { accessToken },
      } = getState();
      const data = await axiosLogOut(accessToken);
      return data;
    } catch (error) {
      dispatch(refresh());
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const userUpdateAccount = createAsyncThunk(
  'user/apdateAccount',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosUserUpdateAccount(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

export const getUser = createAsyncThunk(
  'auth/current',
  async (newAccessToken, { rejectWithValue, getState, dispatch }) => {
    try {
      if(!newAccessToken) {
        const { auth } = getState();
        const data = await axiosGetUser(auth.accessToken);
        return data;
      } else {
        const data = await axiosGetUser(newAccessToken);
        return data;
      }
    } catch (error) {
      const { data, status } = error.response;
      if(status === 401) {
        dispatch(refresh());
      }
      return rejectWithValue({ data, status });
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const { auth } = getState();
      const data = await axiosRefresh(auth.sid, auth.refreshToken);
      dispatch(getUser(data.accessToken));
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
