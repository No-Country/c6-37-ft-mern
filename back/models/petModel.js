import mongoose from "mongoose";

const petSchema = mongoose.Schema({
  name: string,
  specie: string,
  breed: string,
  sex: string,
  size: string,
  birth: string,
  weight: string,
  note: string,
  owner: string
});

const petModel = mongoose.model('petModel', petSchema);

export default petModel;