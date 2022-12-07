import { AxiosResponse } from 'axios';

import ManagerAppApi from '../rest/RestService';

import { User, UserRegistrationData } from './models';

class UsersApi {
  static async getUsers(): Promise<AxiosResponse<User[]>> {
    const res = await ManagerAppApi.get<User[]>(`/users`);
    return res;
  }

  static async getUser(userId: string): Promise<AxiosResponse<User>> {
    const res = await ManagerAppApi.get<User>(`/users/${userId}`);
    return res;
  }

  static async updateUser(
    // TODO handle 404 & 409 login already exists
    userId: string,
    newUser: UserRegistrationData
  ): Promise<AxiosResponse<User>> {
    const res = await ManagerAppApi.put<User>(`/users/${userId}`, newUser);
    return res;
  }

  static async deleteUser(userId: string): Promise<AxiosResponse<User>> {
    const res = await ManagerAppApi.delete<User>(`/users/${userId}`);
    return res;
  }
}

export default UsersApi;
