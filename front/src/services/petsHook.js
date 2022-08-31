import { useEffect, useState } from 'react';
import { getClient } from './clients';
import axios from 'axios';

const URL = import.meta.env.VITE_URL + 'pet/';

const petsHook = () => {
  const [pets, setPets] = useState([]);
  const [petsWithOwner, setPetsWithOwner] = useState([]);

  const getPets = async () => {
    await axios.get(URL).then((res) => setPets(res.data));
  };

  const getPetOwner = async () => {

    const mascotas = pets;

    const petsAndOwner = await Promise.all(
      mascotas.map(async (mascota)=>{

        await getClient(mascota.owner).then((res)=> (mascota.owner = `${res.data.name} ${res.data.lastName}`)).catch((err)=>console.log(err));
        return mascota;
      })
    )

    setPetsWithOwner(petsAndOwner);

  }

  const getPet = async (_id) => {
    const resp = await axios.get(URL + _id);
    return resp;
  };

  const getOwnerPets = async (email) => {
    const resp = await axios.get(URL + 'owner/' + email);
    return resp;
  };

  const createPet = async (pet) => {
    const resp = await axios.post(URL, pet);
    return resp;
  };

  const updatePet = async (pet) => {
    const resp = await axios.put(URL + pet._id, pet);
    return resp;
  };

  const deletePet = async (_id) => {
    const resp = await axios.delete(URL + _id);
    return resp;
  };

  const deleteClientPets = async (owner) => {
    const resp = await axios.delete(URL + 'owner/' + owner);
    return resp;
  };

  useEffect(()=>{

    pets.length >0 &&getPetOwner();

  },[pets])

  return {
    getPets,
    getPet,
    getOwnerPets,
    createPet,
    updatePet,
    deletePet,
    deleteClientPets,
    pets,
    petsWithOwner
  }

};

export default petsHook;
