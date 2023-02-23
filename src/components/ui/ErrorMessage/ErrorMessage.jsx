import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { clearError } from 'redux/auth/auth-slice';
import { clearErrorTr } from 'redux/transaction/transaction-slice';

import Text from 'components/ui/Text/Text';

import s from './ErrorMessage.module.scss';

export default function ErrorMessage(data) {
    const dispatch = useDispatch();
    const [isDisplayed, setIsDisplayed] = useState(true);

    const handleDismissClick = () => {
        setIsDisplayed(false);
        dispatch(clearError());
        dispatch(clearErrorTr());
    }
    
    if (!isDisplayed) {
        return null;
    }

    return <div className={s.errorMessage}>
        <button className={s.dismissButton} onClick={handleDismissClick}>
            <svg viewBox="0 0 14 14" width='12' height='12'>
            <path d="m1 1 12 12M1 13 13 1" stroke="#52555F" strokeWidth="2" />
            </svg>
        </button>
        <div className={s.boo}>
            <div className={s.face} id="face"></div>
        </div>
        <div className={s.shadow}></div>

        <h1 className={s.title}>Ups...</h1>
        <Text text ={`${data.text}`} textClass="textError" />
    </div>
}