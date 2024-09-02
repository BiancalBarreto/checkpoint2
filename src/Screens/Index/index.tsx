import { AuthContext } from "@/Context/AuthContext";
import { useContext } from "react";
import Users from "../Users/Users";
import Login from "../Auth";

const Index = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Users /> : <Login />;
};

export default Index;
