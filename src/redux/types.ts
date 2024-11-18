export interface User {
   firstName:string;
   lastName:string;
    email: string;
    country:string;
   
  }
  
  export interface AuthState {
    user: User | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
  export interface LoginData {
    email: string;
    password: string;
  }