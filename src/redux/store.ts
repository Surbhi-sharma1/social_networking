// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import userReducer from './user/userSlice'
import postReducer from './posts/post'
import notificationReducer from './notification/notification'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    userProfile: userReducer,
    post:postReducer,
    notification:notificationReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
