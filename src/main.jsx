import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes/routes';
import { Info } from './containers/Register/style';
import StyleGlobal from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <StyleGlobal />
      <Routes />
    </>
  </React.StrictMode>,
);
