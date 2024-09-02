import { UserStack } from "@/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./List";
import Details from "./Details";
import { useContext } from "react";
import { AuthContext } from "@/Context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator<UserStack>();

const Users = () => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log("Users.tsx", isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Users;
