import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Header from 'components/layout/Header/Header';
import UserRoutes from 'components/Routes/UserRoutes';

import { getErrorCode, getError } from 'redux/transaction/transaction-selectors';
import { getErrorSignUp, getErrorLogInCode} from 'redux/auth/auth-selectors';
import ErrorMessage from 'components/ui/ErrorMessage/ErrorMessage';

function App() {

  const [errMessage, setErrMessage] = useState('');

  const errTransitionCode = useSelector(getErrorCode);
  const errTransitionMessage = useSelector(getError);
  const errAuthCode = useSelector(getErrorLogInCode);
  const errSignUp = useSelector(getErrorSignUp);

  useEffect(() => {
    if(!errAuthCode && !!errTransitionCode) {
      return;
    }
    if(errTransitionCode === 401) {
      return;
    }
    if(errTransitionCode !== 401 && errTransitionMessage) {
      setErrMessage(errTransitionMessage);
    }
    if(errAuthCode) {
      setErrMessage(errSignUp);
    } else {
      setErrMessage('');
    }  
  }, [errTransitionCode, errAuthCode, errTransitionMessage, errSignUp])

  return (
    <>
      <Header />
      <main>
        {errMessage !== '' && <ErrorMessage text={`${errMessage}`} />}
        <UserRoutes />
      </main>
    </>
  );
}

export default App;
