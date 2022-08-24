import axios from 'axios';

const URL = import.meta.env.VITE_URL + 'pet/';

export const getPets = async () => {
  const resp = await axios.get(URL);
  return resp;
};

export const getPet = async (_id ) => {
  const resp = await axios.get(URL + _id);
  return resp;
};

export const createPet = async (pet) => {
  const resp = await axios.post(URL, pet);
  return resp;
};

export const deletePet = async ({id}) => {
  const resp = await axios.delete(URL + id);
  return resp;
};
