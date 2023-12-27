/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState, useEffect } from 'react';

const TicketContext = createContext({});

export function CartProvider({ children }) {
  const [orderTicket, setOrderTicket] = useState([]);

  const putOrderTicket = async (ticket) => {
    const priceRandom = Math.floor(Math.random() * (80 - 20 + 1)) + 20;

    const updateDate = [
      {
        ...ticket,
        quantity: 1,
        price: priceRandom,
      },
    ];
    setOrderTicket(updateDate);

    await localStorage.setItem(
      'myevents:ticketInfo',
      JSON.stringify(orderTicket),
    );
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfoData = await localStorage.getItem('myevents:ticketInfo');

      if (clientInfoData) {
        setOrderTicket(JSON.parse(clientInfoData));
      }
    };

    loadUserData();
  }, []);

  const userLogOut = async () => {
    await localStorage.removeItem('myevents:userData');
  };

  return (
    <TicketContext.Provider value={{ putOrderTicket, orderTicket, userLogOut }}>
      {children}
    </TicketContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(TicketContext);

  if (!context) {
    throw new Error('Houve algum erro  com UserContext');
  }

  return context;
};
