import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { getLogin, getUserIsRefreshing } from 'redux/auth/auth-selectors';
import { getUser } from 'redux/auth/auth-operations';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function PrivateRoute() {

const isUserLogin = useSelector(getLogin);
const isRefresh = useSelector(getUserIsRefreshing);

const dispatch = useDispatch();

///This is for reload page
  useEffect(() => {
      if(isUserLogin && !isRefresh) {
        dispatch(getUser());
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isUserLogin && !isRefresh) {
    return <Navigate to="/login" />;
    }

  return <Outlet />;
}
