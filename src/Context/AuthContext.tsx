import authClient from "@/services/auth";
import { AuthUser } from "@/types";
import React, {
  useEffect,
  useState,
  createContext,
  PropsWithChildren,
} from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

type AuthContextProps = {
  isLoggedIn: boolean;
  isLoading: boolean;
  auth: (username: string, password: string) => void;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { getItem, setItem } = useAsyncStorage("token");

  const auth = async (username: string, password: string) => {
    try {
      setIsLoading(true);
      const { data } = await authClient.post<AuthUser>("", {
        username,
        password,
      });
      setIsLoggedIn(true);
      await setItem(data.token);
    } finally {
      setIsLoading(false);
    }
  };

  const loadData = async () => {
    const token = await getItem();
    if (token) setIsLoggedIn(true);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, auth, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
