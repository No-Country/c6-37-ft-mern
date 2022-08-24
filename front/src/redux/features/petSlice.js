import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    delPetData: (state, action) => {
      state = action.payload
    },
    setPetData: (state, action) => {
      const {name, specie, size, breed, sex, birth, weight, note, owner} = action.payload
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