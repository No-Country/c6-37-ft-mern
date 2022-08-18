import { createSlice } from '@reduxjs/toolkit'
import {v4 as uuid} from 'uuid'

const initialState = {
  id:uuid(),
  name:'juan',
  lastName:'domingo',
  phone: '343243242',
  email:'adsda@asdad.com',
  address:'adasdads',
  imgUrl:'https://dsjadssad',
  editable: false,
}


export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData:(state, action) => {
      const {id, name, lastName, email, address, phone} = action.payload
      state.id = id
      state.name = name;
      state.lastName = lastName;
      state.email = email;
      state.address = address;
      state.phone = phone;
      state.editable = false;
    },
    delUserData: (state) => {
      // consulta la db
    },
    setEditable:(state) => {
      state.editable = !state.editable
    }
  }
})

export const { setUserData, delUserData, setEditable } = userDataSlice.actions;

export default userDataSlice.reducer;