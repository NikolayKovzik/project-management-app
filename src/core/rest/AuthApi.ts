import { AxiosResponse } from 'axios';

import { AuthToken, User, UserLoginData, UserRegistrationData } from '../api/models';

import ManagerAppApi from './RestService';

class AuthApi {
  static async signUp(userData: UserRegistrationData): Promise<AxiosResponse<User>> {
    const res = await ManagerAppApi.post<User>(`/auth/signup`, userData);
    console.log('resp signUp', res);
    return res;
  }

  static async signIn(userData: UserLoginData): Promise<AxiosResponse<AuthToken>> {
    const res = await ManagerAppApi.post<AuthToken>(`/auth/signin`, userData);
    console.log('resp signIn', res);
    console.log(localStorage.getItem('project-management-app-token'));
    localStorage.setItem('project-management-app-token', res.data.token);
    return res;
  }
}

export default AuthApi;
