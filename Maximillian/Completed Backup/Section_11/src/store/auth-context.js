import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogIn: (email, password) => {},
  onLogOut: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const status = localStorage.getItem("loginStatus");
    if (status === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = (email, password) => {
    localStorage.setItem("loginStatus", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("loginStatus", "0");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogIn: loginHandler,
        onLogOut: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
