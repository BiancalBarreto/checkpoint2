import { UserStack, Users } from "@/types";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import UserItem from "./UserItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import client from "@/services/api";

const List = ({ navigation }: NativeStackScreenProps<UserStack>) => {
  const [users, setUsers] = useState<Users>();

  const fetchUsers = async () => {
    const { data } = await client.get<Users>("/users");
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => (
        <UserItem user={item} navigation={navigation} />
      )}
    />
  );
};

export default List;
