import { createSlice } from '@reduxjs/toolkit';

import {
  userAddBalance,
  userGetBalance,
  getTransactionsByMonth,
  addTransaction,
  deleteTransaction,
  getExpensesTransByDate,
  getIncomeTransByDate,
  getChartData,
  getReportBalance,
  getSliderReport,
} from './transaction-operations';

const initialState = {
  balance: 0,
  monthlySum: [],
  transactions: [],
  currentDate: '',
  message: '',
  loading: false,
  error: null,
  errorCode: null,
  calendarDate: null,
  chartData: [],
  reportBalance: [{expenses: 0}, {income: 0}],
  sliderReportData: [{income: []}, {expenses: []}],
};

const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addDate: (state, { payload }) => {
      state.currentDate = payload;
    },
    addCalendarDate: (state, { payload }) => {
      state.calendarDate = payload;
    },
    addCategoryName: (state, { payload }) => {
      state.categoryName = payload;
    },
    clearTransisions: () => ({ ...initialState}),
    clearChartData: (state) => {
      state.chartData = [];
    },
    clearErrorTr: state => {
      state.error = null;
      state.errorCode = null;
    },
  },
  extraReducers: builder => {
    // User add balance
    builder
      .addCase(userAddBalance.pending, state => {
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(userAddBalance.fulfilled, (state, { payload }) => {
        state.balance = payload.newBalance;
        state.loading = false;
      })
      .addCase(userAddBalance.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
        state.errorCode = payload.status;
      });

      // User get balance
      builder
      .addCase(userGetBalance.pending, state => {
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(userGetBalance.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
        state.loading = false;
      })
      .addCase(userGetBalance.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
        state.errorCode = payload.status;
      });

    // Get transactions by month
    builder
      .addCase(getTransactionsByMonth.pending, state => {
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(getTransactionsByMonth.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
        state.monthlySum = payload.monthlySum;
        state.transactions = payload.transitions;
        state.loading = false;
      })
      .addCase(getTransactionsByMonth.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
        state.errorCode = payload.status;
      });

    // Add transaction
    builder
      .addCase(addTransaction.pending, state => {
        state.message = '';
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.message = payload.transitionName;
        state.loading = false;
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
        state.errorCode = payload.status;
      });

    // Delete transaction
    builder
      .addCase(deleteTransaction.pending, state => {
        state.message = '';
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.loading = false;
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
        state.errorCode = payload.status;
      });

    // Get expenses transaction by date
    builder
      .addCase(getExpensesTransByDate.pending, state => {
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(getExpensesTransByDate.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
        state.monthlySum = payload.monthlySum;
        state.transactions = payload.transitionByDate;
        state.loading = false;
      })
      .addCase(getExpensesTransByDate.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
        state.errorCode = payload.status;
      });

    // Get income transaction by date
    builder
      .addCase(getIncomeTransByDate.pending, state => {
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(getIncomeTransByDate.fulfilled, (state, { payload }) => {
        state.balance = payload.balance;
        state.monthlySum = payload.monthlySum;
        state.transactions = payload.transitionByDate;
        state.loading = false;
      })
      .addCase(getIncomeTransByDate.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
        state.errorCode = payload.status;
      });

    // Get chart data
    builder
      .addCase(getChartData.pending, state => {
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(getChartData.fulfilled, (state, { payload }) => {
        state.chartData = payload;
        state.loading = false;
      })
      .addCase(getChartData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
        state.errorCode = payload.status;
      });

      // Get report balance data
      builder
      .addCase(getReportBalance.pending, state => {
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(getReportBalance.fulfilled, (state, { payload }) => {
        state.reportBalance = payload;
        state.loading = false;
      })
      .addCase(getReportBalance.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
        state.errorCode = payload.status;
      });

      // Get slider report data
      builder
      .addCase(getSliderReport.pending, state => {
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(getSliderReport.fulfilled, (state, { payload }) => {
        state.sliderReportData = payload;
        state.loading = false;
      })
      .addCase(getSliderReport.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
        state.errorCode = payload.status;
      });
  },
});

export default transactions.reducer;

export const { addDate } = transactions.actions;
export const { addCalendarDate } = transactions.actions;
export const { addCategoryName } = transactions.actions;
export const { clearTransisions, clearChartData, clearErrorTr } = transactions.actions;

