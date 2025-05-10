
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('scrambleUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Mock login function - in a real app, this would validate against a backend
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // For demonstration purposes, we'll accept any non-empty values
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Create a mock user
    const user = {
      id: '1',
      name: email.split('@')[0],
      email
    };

    // Save to localStorage
    localStorage.setItem('scrambleUser', JSON.stringify(user));
    setCurrentUser(user);
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('scrambleUser');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    logout,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
