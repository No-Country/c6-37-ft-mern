import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  address: '',
  imgUrl: '',
  editable: false,
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { name, lastName, email, address, phoneNumber } = action.payload;
      state.name = name;
      state.lastName = lastName;
      state.phoneNumber = phoneNumber;
      state.email = email;
      state.address = address;
      state.editable = false;
    },
    delUserData: (state) => {
      const { name, lastName, email, address, phoneNumber } = initialState;
      state.name = name;
      state.lastName = lastName;
      state.phoneNumber = phoneNumber;
      state.email = email;
      state.address = address;
      state.editable = false;
      // state = {...state, ...initialState}
      console.log(state);
    },
    setEditable: (state) => {
      state.editable = !state.editable;
    },
  },
});

export const { setUserData, delUserData, setEditable } = userDataSlice.actions;

export default userDataSlice.reducer;
