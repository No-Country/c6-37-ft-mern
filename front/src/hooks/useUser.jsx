import { useCallback } from 'react';
import { useUserContext } from '../context/UserContext';

const useUser = () => {
  const { user, setUser } = useUserContext();
  const localStorage = window.localStorage;

  // const login = useCallback(
  //   (response) => {
  //     localStorage.setItem('user', JSON.stringify(response));
  //     setUser(response);
  //   },
  //   [setUser, localStorage]
  // );

  // const logout = useCallback(() => {
  //   setUser(null);
  //   localStorage.removeItem('user');
  // }, [setUser, localStorage]);

  const login = useCallback((response) => {
    localStorage.setItem('user', JSON.stringify(response))
    setUser(response)
  }, [setUser, localStorage]);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
  }, [setUser, localStorage]);

  // const login = () => setUser({id:'1', name:'John Doe'});
  // const logout = () => setUser(null);

  return {
    isLogged: Boolean(user),
    user: user,
    login,
    logout,
  };
};

export default useUser;