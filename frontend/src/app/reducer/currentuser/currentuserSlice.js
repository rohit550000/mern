import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: JSON.parse(localStorage.getItem('user')) || null,
  }

export const currentuserSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserInfo: (state,{payload}) => {
      state.data = payload;
      localStorage.setItem('user', JSON.stringify(payload));
    },
    logout(state) {
      state.data = null;
      localStorage.removeItem('user');
    },
}
})

export const { updateUserInfo , logout} = currentuserSlice.actions

export default currentuserSlice.reducer


