export type UserRegistrationData = {
  name: string;
  login: string;
  password: string;
};

export type UserLoginData = {
  login: string;
  password: string;
};

export type User = {
  _id: string;
  login: string;
  name: string;
};

export type Token = {
  token: string;
};
