import { AxiosResponse } from 'axios';

import { Token, User, UserLoginData, UserRegistrationData } from './models';
import ManagerAppApi from './RestService';

class UsersApi {
  static async signUp(userData: UserRegistrationData): Promise<AxiosResponse<User>> {
    const res = await ManagerAppApi.post<User>(`/auth/signup`, userData);
    console.log('resp signUp', res);
    return res;
  }

  static async signIn(userData: UserLoginData): Promise<AxiosResponse<Token>> {
    const res = await ManagerAppApi.post<Token>(`/auth/signin`, userData);
    console.log('resp signIn', res);
    localStorage.setItem('token', res.data.token);
    return res;
  }

  static async getUsers(): Promise<AxiosResponse<User[]>> {
    const res = await ManagerAppApi.get(`/users`);
    console.log('resp getUsers', res);
    return res;
  }
}

export default UsersApi;
