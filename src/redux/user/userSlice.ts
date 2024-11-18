
import { createSlice } from '@reduxjs/toolkit';
export type User={
    name:string;
    companyName:string;
    email:string;
}
const initialState :User= {
  name: 'Surbhi Sharma',
  companyName: 'Sourcefuse',
  email: 'surbhi@sourcefuse.com',
};

const userSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    updateUserProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUserProfile } = userSlice.actions;
export default userSlice.reducer;
