import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistedStore, store } from 'redux/store';

import App from './App';

import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

import 'react-datepicker/dist/react-datepicker.css';
import 'styles/styles.scss';

const container = document.getElementById('root');
const root = createRoot(container);

const [buildVertion, setBuildVertion] = useState(true);

useEffect(() => {
  if(process.env.NODE_ENV === "production") {
    setBuildVertion(true)
  }
  if(process.env.NODE_ENV === "development") {
    setBuildVertion(false)
  }
  
}, [process.env.NODE_ENV])

if(buildVertion) {
  return root.render(
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
} else {
  return root.render(
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

// root.render(
//     // <React.StrictMode>
//   <HashRouter>
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistedStore}>
//       <ScrollToTop />
//       <App />
//     </PersistGate>
//   </Provider>
// </HashRouter>
// // </React.StrictMode>

  
// );
