import React from 'react';

import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children, logged, path }) {
  const user = localStorage.getItem('myevents:userData');

  if (logged && !user) {
    return <Navigate to="/eventos" />;
  }
  if (path === '/login' && user) {
    return <Navigate to="/" />;
  }
  if (path === '/registrar' && user) {
    return <Navigate to="/" />;
  }
  if (path === '/eventos' && user) {
    return <Navigate to="/" />;
  }
  if (path === '/informacao-evento' && !user) {
    return <Navigate to="/eventos" />;
  }
  if (path === '/pagamento' && !user) {
    return <Navigate to="/eventos" />;
  }
  if (path === '/meus-ingressos' && !user) {
    return <Navigate to="/eventos" />;
  }

  return children;
}
