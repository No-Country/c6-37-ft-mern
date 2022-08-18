import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from './features/userSlice'

export const store = configureStore({
  reducer: {
    userData: userDataReducer
  },
})