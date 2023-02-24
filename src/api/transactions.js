import instance from './auth';

// Get all data by transitions for period + total balance + userinfo + monthly data
export const axiosGetTransactionsByMonth = async userData => {
  const { data } = await instance.post('api/transitions/timeLine', userData);
  return data;
};

// Add transaction
export const axiosAddTransaction = async userData => {
  const { data } = await instance.post('api/transitions', userData);
  return data;
};

// Delete transaction by Id
export const axiosDeleteTransaction = async userData => {
  const { data } = await instance.delete(`api/transitions/delete/${userData}`);
  return data;
};

// Get data by expenses + sum income monthly
export const axiosGetExpensesTransByDate = async userData => {
  const { data } = await instance.post('api/transitions/expenses/data', userData);
  return data;
};

// Get data by income + sum income monthly
export const axiosGetIncomeTransByDate = async userData => {
  const { data } = await instance.post('api/transitions/income/data', userData);
  return data;
};

// Get data by category name for period detail
export const axiosGetChartData = async userData => {
  const { data } = await instance.post(
    'api/transitions/report/category/detail',
    userData
  );
  return data;
};

// Get data by category income/expenses for period
export const axiosGetReportBalance = async userData => {
  const { data } = await instance.post(
    'api/transitions/report/category',
    userData
  );
  return data;
};

// Get data income/expenses for period by category name
export const axiosGetSliderReportData = async userData => {
  const { data } = await instance.post(
    'api/transitions/report/category/data',
    userData
  );
  return data;
};
