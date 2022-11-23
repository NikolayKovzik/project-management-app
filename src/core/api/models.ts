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

export type BoardBody = {
  title: string;
  owner: string;
  users: string[];
};

export type Column = {
  _id: string;
  title: string;
  order: number;
  boardId: string;
};

export type ColumnBody = Omit<Column, '_id' | 'boardId'>;
export type ColumnPostBody = Omit<Column, '_id'>;
export type ColumnPatchBody = Omit<Column, 'title' | 'boardId'>;

export type Task = {
  _id: string;
  title: string;
  order: number;
  boardId: string;
  columnId: string;
  description: string;
  userId: string;
  users: string[];
};

export type TaskCreateBody = Omit<Task, '_id' | 'boardId' | 'columnId'>;
export type TaskUpdateBody = Omit<Task, '_id' | 'boardId'>;
export type TaskUpdateSetBody = Pick<Task, '_id' | 'order' | 'columnId'>;
