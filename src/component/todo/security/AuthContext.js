import { createContext, useContext, useState } from "react";

//1: Create a Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//2: Share the created context with other components
export default function AuthProvider({ children }) {
  //Put some state in the context

  //3: Put some state in the context
  const [isAuthenticated, setAuthenticated] = useState(false);

  

  const [username, setUsername] = useState(null); //NEW

  function login(username, password) {
    if (username === "username" && password === "dummy") {
      setAuthenticated(true);
      setUsername(username); //NEW
      return true;
    } else {
      setAuthenticated(false);
      setUsername(null); //NEW
      return false;
    }
  }
  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}
