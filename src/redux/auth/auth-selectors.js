export const getLogin = ({ auth }) => auth.isLogin;
export const getErrorSignUp = ({ auth }) => auth.error;
export const getErrorLogIn = ({ auth }) => auth.error;
export const getAccessToken = ({ auth }) => auth.accessToken;
export const isLoading = ({ auth }) => auth.loading;

export const getUser = ({ auth }) => auth.user;
export const getNewUser = ({ auth }) => auth.user.newUser;
export const getRegNewUser = ({ auth }) => auth.newUser;

export const getRefreshToken = ({ auth }) => auth.refreshToken;
export const getSid = ({ auth }) => auth.sid;
export const getUserIsRefreshing = ({ auth }) => auth.isRefreshing;


