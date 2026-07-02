import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [token, setTokenState] = useState(
    localStorage.getItem("token") || ""
  );

  const [user, setUserState] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const setToken = (newToken) => {
    setTokenState(newToken);

    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
  };

  const setUser = (newUser) => {
    setUserState(newUser);

    if (newUser) {
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("user");
    }
  };

  const logout = () => {
    setTokenState("");
    setUserState(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        setToken,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}