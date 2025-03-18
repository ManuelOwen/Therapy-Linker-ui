import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../users/UserApi';

export interface UserState {
  user: TUser | null;
  
}

const initialState: UserState = {
  user: null,
 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSucces: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },

  },
});

export const { loginSucces, logout } = userSlice.actions;
export default userSlice.reducer;