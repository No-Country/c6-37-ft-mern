import { React, useContext, createContext, useState } from 'react';

const QueryContext = createContext({});

export const useQueryContext = () => useContext(QueryContext);

const QueryContextProvider = ({ children }) => {



    
  return (
    <QueryContext.Provider value={{user, setUser}}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryContextProvider;
