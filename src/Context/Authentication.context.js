import React, { createContext, useContext, useEffect, useState } from "react";

const AuthenticationContext = createContext({
  products: null,
  setProducts: () => {},
  loading: false,
  setLoading: () => {},
  decoded: {},
  setDecoded: () => {},
});

export const useAuth = () => useContext(AuthenticationContext);

export default function AuthenticationContextProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [decoded, setDecoded] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setDecoded(JSON.parse(sessionStorage.getItem("AuthToken")));
    } catch (err) {
      console.log("Error Reading Session Storage", err);
    }
  }, [sessionStorage.getItem("AuthToken")]);

  const value = {
    auth,
    loading,
    setAuth,
    setLoading,
    decoded,
    setDecoded,
  };
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}
