import { createSlice } from '@reduxjs/toolkit';

import { signUp, logIn, googleLogIn, logOut, userUpdateAccount, refresh, getUser } from './auth-operations';

const initialState = {
  user: {},
  newUser: false,
  todaySummary: {},
  accessToken: '',
  refreshToken: '',
  sid: '',
  isLogin: false,
  isTotalLogin: false,
  loading: false,
  isRefreshing: false,
  error: null,
  errorCode: null,
};

const accessAuth = (state, payload) => {
  state.user = payload;
  state.sid = payload.sid;
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
  state.loading = false;
  state.isLogin = true;
  state.isTotalLogin = true;
  state.isRefreshing = false;
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearNewUser: state => {
      state.newUser = {};
    },
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    // SignUp by email
    builder
      .addCase(signUp.pending, state => {
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isLogin = false;
        state.isTotalLogin = false;
        state.newUser = payload.user.newUser;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
        state.errorCode = payload.status;
      });

    // LogIn
    builder
      .addCase(logIn.pending, state => {
        state.newUser = false;
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        accessAuth(state, payload);
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
        state.error = payload.status;
      });

    // Google LogIn
    builder
      .addCase(googleLogIn.pending, state => {
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(googleLogIn.fulfilled, (state, { payload }) => {
        accessAuth(state, payload);
      })
      .addCase(googleLogIn.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
        state.errorCode = payload.status;
      });

    // LogOut
    builder
      .addCase(logOut.pending, state => {
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(logOut.fulfilled, () => ({ ...initialState}))
      .addCase(logOut.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
        state.errorCode = payload.status;
      });

    // User update account
    builder
      .addCase(userUpdateAccount.pending, state => {
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(userUpdateAccount.fulfilled, (state, { payload }) => {
        accessAuth(state, payload);
        state.loading = false;
      })
      .addCase(userUpdateAccount.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.data.message;
        state.errorCode = payload.status;
      });

      // Refresh
      builder
        .addCase(refresh.pending, state => {
          state.loading = true;
          state.error = null;
          state.errorCode = null;
        })
        .addCase(refresh.fulfilled, (state, { payload }) => {
          state.user = payload;
          state.loading = false;
          state.isLogin = true;////
          state.isTotalLogin = true;
          state.isRefreshing = true;////
          state.accessToken = payload.accessToken;
          state.refreshToken = payload.refreshToken;
          state.sid = payload.sid;
        })
        .addCase(refresh.rejected, (state, {payload}) => {
          state.loading = false;
          state.isLogin = false;
          state.isTotalLogin = false;
          state.isRefreshing = false;
          state.error = payload.data.message;
          state.errorCode = payload.status;
        });
      
      // Get user
      builder
      .addCase(getUser.pending, state => {
        state.loading = true;
        state.error = null;
        state.errorCode = null;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isLogin = true;
        state.isTotalLogin = true;
        state.isRefreshing = false;
        state.user = payload;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.isLogin = false;
        state.isRefreshing = true;
        state.accessToken = "";
        state.error = payload.data.message;
        state.errorCode = payload.status;
      });
  },
});

export default auth.reducer;
export const { clearNewUser, clearError } = auth.actions;
