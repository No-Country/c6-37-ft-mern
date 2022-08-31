import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id:'',
  name:'',
  specie:'',
  size:'',
  breed:'',
  birth:'',
  sex:'',
  weight:'',
  imgUrl:'',
  note:'',
  owner:'',
  editable: false
}

const petSlice = createSlice({
  name:'petData',
  initialState,
  reducers: {
    editPetData: (state) => {
      state.editable = !state.editable
    },
    delPetData: (state) => {
      const {_id, name, specie, size, breed, birth, sex, weight, note, owner} = initialState;
      state._id = _id;
      state.name = name;
      state.specie = specie;
      state.size = size;  
      state.breed = breed;
      state.sex = sex;
      state.birth = birth;
      state.weight = weight;
      state.note = note;
      state.owner = owner;
      state.editable = false;
    },
    setPetData: (state, action) => {
      const {_id, name, specie, size, breed, sex, birth, weight, note, owner} = action.payload
      state._id = _id;
      state.name = name;
      state.specie = specie;
      state.size = size;  
      state.breed = breed;
      state.sex = sex;
      state.birth = birth;
      state.weight = weight;
      state.note = note;
      state.owner = owner;
      state.editable = false;
    }
  }
})

export const { editPetData, delPetData, setPetData } = petSlice.actions;

export default petSlice.reducer;