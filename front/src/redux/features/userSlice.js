import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:'juan',
  lastName:'domingo',
  phone: '+01 984 039 492',
  email:'example@example.com',
  address:'Contoso Ltd 215 E Tasman CA San Jose',
  imgUrl:'https://bit.ly/dan-abramov',
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