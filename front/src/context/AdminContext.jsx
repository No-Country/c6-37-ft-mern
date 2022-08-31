import { useEffect } from 'react';
import { React, useContext, createContext, useState } from 'react';
import { getClient } from '../services/clients';
import { getOwnerPets, getPets } from '../services/pets';

const AdminContext = createContext({});

export const useAdminContext = () => useContext(AdminContext);

const AdminContextProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [petsOwner, setPetsOwner] = useState([]);
  const [clients, setClients] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const getPetsData = async () => {
    await getPets().then((res) => setPets(res.data));
  };

  const getPetOwner = async () => {
    const mascotas = pets;

    const mascotasConDueños = await Promise.all(
      mascotas.map(async (mascota) => {
        await getClient(mascota.owner).then(
          (res) => (mascota.owner = res.data.name)
        );
        return mascota;
      })
    );

    setPetsOwner(mascotasConDueños);
  };

  useEffect(() => {
    pets.length > 0 && getPetOwner();
  }, [pets]);

  return (
    <AdminContext.Provider
      value={{ pets, petsOwner, clients, appointments, getPetsData }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
