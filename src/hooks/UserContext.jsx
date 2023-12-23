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

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('myevents:userData');

      if (clientInfo) {
        setUser(JSON.parse(clientInfo));
      }
    };

    loadUserData();
  }, []);

  const userLogOut = async () => {
    await localStorage.removeItem('myevents:userData');
  };

  return (
    <UserContext.Provider value={{ putUserData, userData, userLogOut }}>
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
