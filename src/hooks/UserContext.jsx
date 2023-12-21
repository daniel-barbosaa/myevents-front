/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react';

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [userData, setUser] = useState({});

  const putUserData = async (user) => {
    setUser(user);

    await localStorage.setItem('myevents:userData', JSON.stringify(user));
  };

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('Houve algum erro  com UserContext');
  }

  return context;
};
