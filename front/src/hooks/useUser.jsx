import { useCallback } from 'react';
import { useUserContext } from './../context/UserContext';

const useUser = () => {
  const { user, setUser } = useUserContext();
  const localStorage = window.localStorage;

  const login = useCallback((response) => {
    localStorage.setItem('user', JSON.stringify(response))
    setUser(response)
  }, [setUser, localStorage]);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
  }, [setUser, localStorage]);

  return {
    isLogged: !!user,
    isAdmin: user && user.isAdmin,
    user: user,
    login,
    logout,
  };
};

export default useUser;
