import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

//create useAuth hook
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);

  const addUser = (user) => {
    setUserProfile(user);
  }

  useEffect(() => {
    const persistedUser = localStorage.getItem('userProfile')
    if(persistedUser) {
      setUserProfile(JSON.parse(persistedUser))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(userProfile))
  }, [userProfile])

  return (
    <AuthContext.Provider value={{ userProfile, addUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };