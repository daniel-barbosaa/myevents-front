import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import paths from '../constants/paths';

import {
  Login,
  Register,
  Home,
  Main,
  InfoTicket,
  PaymentForm,
  Tickets,
} from '../containers/index';

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.Login} element={<Login />} />
        <Route path={paths.Register} element={<Register />} />
        <Route path={paths.Home} element={<Home />} />
        <Route path={paths.Main} element={<Main />} />
        <Route path={paths.InfoTickets} element={<InfoTicket />} />
        <Route path={paths.PaymentForm} element={<PaymentForm />} />
        <Route path={paths.MyTickets} element={<Tickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
