import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id:'',
  name:'Firulais',
  specie:'dog',
  size:'mini',
  breed:'jack russel',
  birth:'03/16/18',
  sex:'male',
  weight:'12.5 kg',
  imgUrl:'https://www.petdarling.com/wp-content/uploads/2014/08/perros-jack-russell-terrier.jpg',
  note:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes',
  editable: false
}

const petSlice = createSlice({
  name:'petData',
  initialState,
  reducers: {
    editInfo: (state) => {
      state.editable = !state.editable
    },
    delInfo: (state, action) => {
      state = action.payload
    },
    updateInfo: (state, action) => {
      const {id, name, specie, size, breed, sex, birth, weight, note} = action.payload
      state.id = id;
      state.name = name;
      state.specie = specie;
      state.size = size;  
      state.breed = breed;
      state.sex = sex;
      state.birth = birth;
      state.weight = weight;
      state.note = note;
      state.editable = false;
    }
  }
})

export const { editInfo, delInfo, updateInfo } = petSlice.actions;

export default petSlice.reducer;