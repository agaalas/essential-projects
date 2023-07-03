import React, { useEffect, useState } from "react";
import { AuthContext } from "../components/context/auth-context";

function AuthProvider(props) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  function login(token, user) {
    setToken(token);
    setUser(user);
    localStorage.setItem("authObj", JSON.stringify({ token, user }));
  }

  useEffect(()=>{
    const authObj=localStorage.getItem("authObj")
    if(authObj){
      const authObjs=JSON.parse(authObj)
      if(authObjs){
        login(authObjs.token,authObjs.user)
      }
    }
   
  },[])

  function logout() {
    setToken("");
    setUser(null);
    localStorage.removeItem("authObj")
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
