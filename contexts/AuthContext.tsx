'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { User, AuthResponse, LoginData, RegisterData } from '@/types';
import { authAPI } from '@/lib/api';
interface AuthContextType {
  user: User | null;
  login: (data: LoginData) => Promise<void>;
  logout: () => void;
  registerUser: (data: RegisterData) => Promise<void>;
  loading: boolean;
  isAdmin: boolean;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
    const isAdmin = user?.role === 'admin';
    
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      // Optional: fetch user info from backend if needed
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async ({ email, password }: LoginData) => {
    const response: AuthResponse = await authAPI.login(email, password);
    Cookies.set('token', response.token, { expires: 7 });
    setUser(response.user);
  };

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
  };

const registerUser = async (data: RegisterData) => {
  const response: AuthResponse = await authAPI.register(data);
  Cookies.set('token', response.token, { expires: 7 });
  setUser(response.user);
};



  return (
<AuthContext.Provider value={{ user, login, logout, registerUser, loading, isAdmin }}>
  {children}
</AuthContext.Provider>



  );
};
