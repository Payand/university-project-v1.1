import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../api/api";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const [user, setUser] = useState(0);

  const getProfiles = () => {
    const { users } = api;
    setProfiles(users);
  };

  const login = (email, password) => {
    const findUser = profiles.filter(
      (profile) =>
        profile.email === email && profile.password === Number(password)
    );
    setUser(findUser);
    if (findUser.length) {
      toast.success("Successfully logged in");
    } else {
      toast.error("Wrong username or passwors");
    }
  };
  const logout = () => {
    setUser(0);
  };

  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <LoginContext.Provider value={{ login, user, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
