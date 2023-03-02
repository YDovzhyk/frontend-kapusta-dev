import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistedStore, store } from 'redux/store';

import App from './App';

import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

import 'react-datepicker/dist/react-datepicker.css';
import 'styles/styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);

if(process.env.NODE_ENV === "production") {
  root.render(
    // <React.StrictMode>
  <HashRouter>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <ScrollToTop />
      <App />
    </PersistGate>
  </Provider>
</HashRouter>
// </React.StrictMode>
  );
} 

if(process.env.NODE_ENV === "development") {
  root.render(
    // <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <ScrollToTop />
      <App />
    </PersistGate>
  </Provider>
</BrowserRouter>
// </React.StrictMode>
  );
}