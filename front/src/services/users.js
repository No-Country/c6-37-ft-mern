import axios from 'axios';

const URL = import.meta.env.VITE_URL + 'usuarios/';

export const getUsers = async () => {
    const resp = await axios.get(URL);
    return resp;
};

export const getUser = async ({ email, password }) => {
  const resp = await axios.post(URL, {
    usuario: email,
    contrasena: password,
  });
  return resp;
};

export const createUser = async (user) => {
  const resp = await axios.post(URL + 'registrar/', {
    usuario: user.email,
    contrasena: user.password,
    isAdmin: false,
  });
  return resp;
};

export const deleteUser = async (user) => {
  const resp = await axios.delete(URL + user.usuario);
  return resp;
};
