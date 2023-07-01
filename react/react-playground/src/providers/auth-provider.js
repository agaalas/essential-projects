import React, { useState } from "react";
import { AuthContext } from "../components/context/auth-context";

function AuthProvider(props) {
  const [token, setToken] = useState("asds");
  const [user, setUser] = useState(null);
  function login(token, user) {
    setToken(token);
    setUser(user);
  }
  function logout() {
    setToken("");
    setUser(null);
  }
  return (
    <AuthContext.Provider
      value={{
        token: token,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
