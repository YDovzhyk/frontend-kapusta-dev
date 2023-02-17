import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  axiosGetTransactionsByMonth,
  axiosAddTransaction,
  axiosDeleteTransaction,
  axiosGetExpensesTransByDate,
  axiosGetIncomeTransByDate,
  axiosGetChartData,
  axiosGetReportBalance,
  axiosGetSliderReportData,
} from 'api/transactions';

import { axiosUserAddBalance, axiosGetBalance } from 'api/user';

import { refresh } from 'redux/auth/auth-operations';

export const userAddBalance = createAsyncThunk(
  'user/addBalance',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const data = await axiosUserAddBalance(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      if(status === 401) {
        dispatch(refresh());
      }
      return rejectWithValue({ data, status });
    }
  }
);

export const userGetBalance = createAsyncThunk(
  'user/userGetBalance',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await axiosGetBalance();
      return data;
    } catch (error) {
      const { data, status } = error.response;
      if(status === 401) {
        dispatch(refresh());
      }
      return rejectWithValue({ data, status });
    }
  }
);

export const getTransactionsByMonth = createAsyncThunk(
  'transactions/byMonth',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const data = await axiosGetTransactionsByMonth(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      if(status === 401) {
        dispatch(refresh());
      }
      return rejectWithValue({ data, status });
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const data = await axiosAddTransaction(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      if(status === 401) {
        dispatch(refresh());
      }
      return rejectWithValue({ data, status });
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const data = await axiosDeleteTransaction(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      if(status === 401) {
        dispatch(refresh());
      }
      return rejectWithValue({ data, status });
    }
  }
);

export const getExpensesTransByDate = createAsyncThunk(
  'transactions/getExpTransByDate',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const data = await axiosGetExpensesTransByDate(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      if(status === 401) {
        dispatch(refresh());
      }
      return rejectWithValue({ data, status });
    }
  }
);

export const getIncomeTransByDate = createAsyncThunk(
  'transactions/getIncTransByDate',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const data = await axiosGetIncomeTransByDate(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      if(status === 401) {
        dispatch(refresh());
      }
      return rejectWithValue({ data, status });
    }
  }
);

export const getChartData = createAsyncThunk(
  'transactions/getChartDataDetail',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const data = await axiosGetChartData(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      if(status === 401) {
        dispatch(refresh());
      }
      return rejectWithValue({ data, status });
    }
  }
);

export const getReportBalance = createAsyncThunk(
  'transactions/getReportBalance',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const data = await axiosGetReportBalance(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      if(status === 401) {
        dispatch(refresh());
      }
      return rejectWithValue({ data, status });
    }
  }
);

export const getSliderReport = createAsyncThunk(
  'transactions/getBarChart',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const data = await axiosGetSliderReportData(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      if(status === 401) {
        dispatch(refresh());
      }
      return rejectWithValue({ data, status });
    }
  }
);
