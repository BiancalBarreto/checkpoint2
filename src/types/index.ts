type Users = User[];

type User = {
  createdAt: string;
  firstName: string;
  avatar: string;
  lastName: string;
  email: string;
  id: string;
};

type UserStack = {
  List: undefined;
  Details: { id: string };
};

type AuthUser = {
  id: number;
  image: string;
  token: string;
}

export { Users, User, UserStack, AuthUser };
