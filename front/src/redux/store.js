import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from './features/userSlice'
import petReducer from './features/petSlice'

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    petData: petReducer,
  },
})