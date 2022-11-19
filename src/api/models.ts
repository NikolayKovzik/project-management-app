export type UserRegistrationData = {
  name: string;
  login: string;
  password: string;
};

export type UserLoginData = Omit<UserRegistrationData, 'name'>;

export type User = {
  _id: string;
  login: string;
  name: string;
};

export type AuthToken = {
  token: string;
};

export type Board = {
  _id: string;
  title: string;
  owner: string;
  users: string[];
};

export type BoardBody = Omit<Board, '_id'>;
