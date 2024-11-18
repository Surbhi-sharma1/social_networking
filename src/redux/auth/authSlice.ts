// src/redux/slices/authSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { User } from '../types';


interface AuthState {
  user: any; 
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
}

const mockUser: User = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'test@example.com',
    country: 'USA',
  };
export const loginUser = createAsyncThunk<User, string, { rejectValue: string }>(
  'auth/login',
  async (email, { rejectWithValue }) => {
    try {
        if (email === mockUser.email ) { 
            return mockUser; 
          
          } else {
            return rejectWithValue('Login failed: Invalid email or password');
          }
    } catch (error) {
     
      return rejectWithValue('Login failed');
    }
  }
);


const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Clear previous errors
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;  
        state.error = null; 
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; 
      });
  },
});

// Export the logout action and the reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
