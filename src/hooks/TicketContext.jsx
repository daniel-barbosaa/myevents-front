/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState, useEffect } from 'react';

const TicketContext = createContext({});

export function CartProvider({ children }) {
  const [orderTicket, setOrderTicket] = useState([]);

  const updateLocalStorage = async (ticket) => {
    await localStorage.setItem('myevents:ticketInfo', JSON.stringify(ticket));
  };

  const putOrderTicket = async (ticket) => {
    const updateDate = [
      {
        ...ticket,
        quantity: 1,
      },
    ];
    setOrderTicket(updateDate);

    await updateLocalStorage(updateDate);
  };

  const increaseOrder = async (ticket) => {
    const updateTicket = [
      {
        ...ticket,
        quantity: ticket.quantity + 1,
      },
    ];
    setOrderTicket(updateTicket);
    await updateLocalStorage(updateTicket);
  };

  const decreaseOrder = async (ticket) => {
    if (ticket.quantity > 1) {
      const updateTicket = [
        {
          ...ticket,
          quantity: ticket.quantity - 1,
        },
      ];
      setOrderTicket(updateTicket);
      await updateLocalStorage(updateTicket);
    }

    return ticket;
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
    <TicketContext.Provider
      value={{
        putOrderTicket,
        orderTicket,
        userLogOut,
        increaseOrder,
        decreaseOrder,
      }}
    >
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
