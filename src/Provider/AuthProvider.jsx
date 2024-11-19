import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/FireBase.config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // sign in
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign out
  const logOut = () => {
    return signOut(auth);
  };
  // update Profile
  const updateUser = (updateData) => {
    return updateProfile(auth.createUser, updateData);
  };
  const authInfo = {
    user,
    setUser,
    createUser,
    login,
    logOut,
    updateUser,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
