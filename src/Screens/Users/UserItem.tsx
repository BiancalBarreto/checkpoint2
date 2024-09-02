import { TouchableOpacity, Text } from "react-native";
import { User, UserStack } from "@/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type UserItemProps = {
  user: User;
  navigation: NativeStackNavigationProp<UserStack>;
};

const UserItem = ({ user, navigation }: UserItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { id: user.id })}
    >
      <Text>{`${user.firstName} ${user.lastName}`.trim()}</Text>
    </TouchableOpacity>
  );
};

export default UserItem;
