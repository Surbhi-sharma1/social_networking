import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Notification {
    id: number;
    message: string;
    postData: any;
  }
  
  // Define the state type for notifications
  interface NotificationState {
    notifications: Notification[];
  }
  
  const initialState: NotificationState = {
    notifications: [],
  };
const notification=createSlice({
    name:'notification',
    initialState,
    reducers: {
        notifyUser: (state, action: PayloadAction<{ message: string; postData: any }>) => {
          state.notifications.push({
            id: Date.now(), // Generate unique ID
            message: action.payload.message,
            postData: action.payload.postData,
          });
        },
      },
    });
    
    export const { notifyUser } = notification.actions;
    
    export default notification.reducer;