import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navigate, Outlet } from 'react-router-dom';

import { getLogin, getUserIsRefreshing, getIsTotalLogin } from 'redux/auth/auth-selectors';
import { getErrorCode } from 'redux/transaction/transaction-selectors';
import { getUser } from 'redux/auth/auth-operations';
import Warning from 'components/ui/Warning/Warning';


export default function PrivateRoute() {

  const isUserLogin = useSelector(getLogin);
  const isRefresh = useSelector(getUserIsRefreshing);
  const isTotalLogin = useSelector(getIsTotalLogin);
  const isErrorTransition = useSelector(getErrorCode);

  const dispatch = useDispatch();
  const [errorTransition, setErrorTransition] = useState(false);

  useEffect(() => {
    if (isUserLogin && !isRefresh) {
      dispatch(getUser());
    }
  }, [isRefresh, isUserLogin, dispatch]);

  useEffect(() => {
    if (isErrorTransition === 401) {
      setErrorTransition(true);
    } else {
      setErrorTransition(false);
    }
  }, [isErrorTransition]);


  if (!isTotalLogin) {
    return <Navigate to="/login" />;
    }

  return <div>
      {errorTransition && <Warning />}
      <Outlet />
    </div>;
}
