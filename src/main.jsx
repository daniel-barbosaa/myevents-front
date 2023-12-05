import React from 'react';
import ReactDOM from 'react-dom/client';
import { Login, Register, Home, Main, InfoTicket } from './containers/index';
import StyleGlobal from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleGlobal />
    <InfoTicket />
  </React.StrictMode>,
);
