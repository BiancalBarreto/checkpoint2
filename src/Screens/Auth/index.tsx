import { AuthContext } from "@/Context/AuthContext";
import { useContext, useState } from "react";
import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { auth, isLoading } = useContext(AuthContext);
  return (
    <View>
      <Text>Username</Text>
      <TextInput onChangeText={setUsername} />
      <Text>Password</Text>
      <TextInput onChangeText={setPassword} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Login" onPress={() => auth(username, password)} />
      )}
    </View>
  );
};

export default Login;
