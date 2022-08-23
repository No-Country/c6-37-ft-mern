import mongoose from "mongoose";

const petSchema = mongoose.Schema({
  name: String,
  specie: String,
  breed: String,
  sex: String,
  size: String,
  birth: String,
  weight: String,
  note: String,
  owner: String
});

const petModel = mongoose.model('petModel', petSchema);

export default petModel;