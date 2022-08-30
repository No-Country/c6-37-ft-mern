import axios from 'axios';

const URL = import.meta.env.VITE_URL + 'clientes/';

export const getClients = async () => {
    const resp = await axios.get(URL );
    return resp;
};

export const getClient = async (email) => {
  const resp = await axios.get(URL + email);
  return resp;
};

export const createClient = async (client) => {

  const resp = await axios.post(URL, client);
  return resp;

};

export const updateClient = async (client) => {
  const resp = await axios.put(URL + client.email, client);
  return resp;
}

export const deleteClient = async (email) => {
  const resp = await axios.delete(URL + email);
  return resp;
}


