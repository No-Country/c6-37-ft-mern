import axios from 'axios';

const URL = import.meta.env.VITE_URL + 'pet/';

export const getPets = async () => {
  const resp = await axios.get(URL);
  return resp;
};

export const getPet = async (_id) => {
  const resp = await axios.get(URL + _id);
  return resp;
};

export const getOwnerPets = async (email) => {
  const resp = await axios.get(URL +'owner/'+ email);
  return resp;
}

export const createPet = async (pet) => {
  const resp = await axios.post(URL, pet);
  return resp;
};

export const updatePet = async (pet) => {
  const resp = await axios.put(URL + pet._id, pet);
  return resp;
};

export const deletePet = async ( _id ) => {
  const resp = await axios.delete(URL + _id);
  return resp;
};

export const deleteClientPets = async ( owner ) => {
  const resp = await axios.delete(URL+'owner/' + owner);
  return resp;
};
