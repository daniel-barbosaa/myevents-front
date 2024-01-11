import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/routes';
import StyleGlobal from './styles/globalStyles';
import 'react-toastify/dist/ReactToastify.min.css';
import AppProvider from './hooks';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <StyleGlobal />
      <AppProvider>
        <Routes />
      </AppProvider>
      <ToastContainer theme="dark" />
    </>
  </React.StrictMode>,
);
