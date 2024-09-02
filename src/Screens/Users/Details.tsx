import client from "@/services/api";
import { User, UserStack } from "@/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const Details = ({ route }: NativeStackScreenProps<UserStack, "Details">) => {
  const { id } = route.params;
  const [user, setUser] = useState<User>();

  const fetchUser = async () => {
    const { data } = await client.get<User>(`/users/${id}`);
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: user?.avatar }} />
      <Text style={styles.title}>First Name</Text>
      <Text>{user?.firstName}</Text>
      <Text style={styles.title}>Last Name</Text>
      <Text>{user?.lastName}</Text>
      <Text style={styles.title}>Email</Text>
      <Text>{user?.email}</Text>
      <Text style={styles.title}>Created At</Text>
      <Text>{user?.createdAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  avatar: {
    borderRadius: 150,
    width: 200,
    height: 200,
  },
  title: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Details;
