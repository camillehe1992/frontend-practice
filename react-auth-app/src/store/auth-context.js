import React, { useState } from "react";

const EXPIRATION_TIME_MS = 900 * 1000; // the token will be expired in millsecond

const AuthContext = React.createContext({
  userId: "",
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initalToken = localStorage.getItem("AUTH_TOKEN");
  const [token, setToken] = useState(initalToken);
  const [userId, setUserId] = useState();
  const userIsLoggedIn = !!token;
  let logoutTimer;

  const logout = () => {
    setUserId(null);
    setToken(null);
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("EXPIRED_AT");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  const login = ({ userId, token }) => {
    setUserId(userId);
    setToken(token);
    localStorage.setItem("AUTH_TOKEN", token);
    const expiredAt = new Date(
      new Date().getTime() + EXPIRATION_TIME_MS
    ).toLocaleString();
    localStorage.setItem("EXPIRED_AT", expiredAt);
    logoutTimer = setTimeout(logout, EXPIRATION_TIME_MS);
  };

  const contextValue = {
    userId,
    token,
    isLoggedIn: userIsLoggedIn,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
