import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    token: null,
    user: null,
  } as any);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setAuthState({
        isAuthenticated: true,
        token: storedToken,
        user: JSON.parse(localStorage.getItem("user") ?? '') || null,
      });
    }
  }, []);

  const makeLogin = (token: string, user: any) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(user));
    setAuthState({
      isAuthenticated: true,
      token,
      user,
    });
  };

  const makeLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setAuthState({
      isAuthenticated: false,
      token: null,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, makeLogin, makeLogout } as any}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
