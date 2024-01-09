import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import paths from '../constants/paths';
import { PrivateRoute } from './private-routes';
import {
  Login,
  Register,
  Home,
  Events,
  InfoTicket,
  PaymentForm,
  Tickets,
} from '../containers/index';

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={paths.Login}
          element={
            <PrivateRoute path={paths.Login}>
              <Login />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.Register}
          element={
            <PrivateRoute path={paths.Register}>
              <Register />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.Home}
          element={
            <PrivateRoute logged path={paths.Home}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.Events}
          element={
            <PrivateRoute path={paths.Events}>
              <Events />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.InfoTickets}
          element={
            <PrivateRoute path={paths.InfoTickets}>
              <InfoTicket />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.PaymentForm}
          element={
            <PrivateRoute path={paths.PaymentForm}>
              <PaymentForm />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.MyTickets}
          element={
            <PrivateRoute path={paths.MyTickets}>
              <Tickets />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
