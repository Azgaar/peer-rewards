import React, { FC, useContext, useEffect, useState } from 'react';

interface IUser {
  email: string;
  firstname: string;
  lastname: string;
}

export const AuthContext = React.createContext<IUser>({} as IUser);

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    fetch('/mockups/user.json')
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

const useUser = (): IUser => useContext(AuthContext);

export { AuthProvider, useUser };
