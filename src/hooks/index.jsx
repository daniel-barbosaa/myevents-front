import react from 'react';

import { UserProvider } from './UserContext';
import { CartProvider } from './TicketContext';

function AppProvider({ children }) {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
}

export default AppProvider;
