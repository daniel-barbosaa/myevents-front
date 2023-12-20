import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/routes';
import { Info } from './containers/Register/style';
import StyleGlobal from './styles/globalStyles';
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <StyleGlobal />
      <Routes />
      <ToastContainer theme='dark' />
    </>
  </React.StrictMode>,
);
