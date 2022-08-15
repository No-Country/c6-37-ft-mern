import { React, useContext, createContext, useState } from 'react';

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    () => JSON.parse(window.localStorage.getItem('user')));
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
