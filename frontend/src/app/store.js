import { configureStore } from '@reduxjs/toolkit'
import currentuserReducer from './reducer/currentuser/currentuserSlice'
export const store = configureStore({
  reducer: {
    currentuser:currentuserReducer,
  },
})