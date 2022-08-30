import petModel from '../models/petModel.js';

export const getPets = async (req, res) => {
  try {
    const pets = await petModel.find();
    res.status(200).json(pets);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getPet = async (req, res) => {
  const { _id } = req.params;
  try {
    const findPet = await petModel.findOne({ _id });
    res.status(200).json(findPet);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getOwnerPets = async (req, res) => {
  const { owner } = req.params;
  try {
    const findPets = await petModel.find({ owner });
    res.status(200).json(findPets);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPet = async (req, res) => {
  const pet = req.body;
  const newPet = new petModel(pet);
  try {
    await newPet.save();
    res.status(201).json(newPet);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updatePet = async (req, res) => {
  const { _id } = req.params;
  const obj = req.body;
  try {
    const editPet = await petModel.updateOne({ _id }, { ...obj });
    const updatedPet = await petModel.findOne({ _id });
    res.status(200).json({ message: 'updated', status: editPet, updatedPet });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deletePet = async (req, res) => {
  const { _id } = req.params;
  try {
    await petModel.deleteOne({ _id });
    res.status(200).json({ message: 'Deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteClientPets = async (req, res) => {
  const { owner } = req.params;
  try {
    await petModel.deleteMany({ owner });
    res.status(200).json({ message: 'Deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
