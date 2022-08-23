import petModel from '../models/petModel'

export const getPets = async (req, res) => {
 try {
  const pets = await petModel.find()
  res.status(200).json(pets)
 } catch(err){res.status(404).res.json({message: err.message})}
}

export const getById = async (req, res) => {
  const _id = req.params._id;
  try {
    const findPet = await petModel.findOne({_id})
    res.status(200).res.json({pet: findPet})
  }catch(err){
    res.status(404).res.json({message: err.message})
  }
}

export const createPet = async (req, res) => {
  const pet = req.body
  const newPet = new petModel(pet)
  try {
    await newPet.save();
    res.status(201).json(newPet)
  } catch(err){
    res.status(409).json({ message: err.message})
  }
}

export const deletePet = async (req, res) => {
  const _id = req.params._id
  try {
    await petModel.deleteOne({_id});
    res.status(200).res.json({message: 'deleted'})
  } catch(err){res.status(400).res.json({message: err.message})}
}