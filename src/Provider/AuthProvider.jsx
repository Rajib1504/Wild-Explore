import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import React, { createContext, useState } from "react";
import auth from "../Firebase/FireBase.config";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    user,
    setUser,
    createUser,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
