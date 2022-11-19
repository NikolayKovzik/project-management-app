import { AxiosResponse } from 'axios';

import { AuthToken, User, UserLoginData, UserRegistrationData } from './models';
import ManagerAppApi from './RestService';

class AuthApi {
  static async signUp(userData: UserRegistrationData): Promise<AxiosResponse<User>> {
    const res = await ManagerAppApi.post<User>(`/auth/signup`, userData);
    // console.log('resp signUp', res);
    return res;
  }

  static async signIn(userData: UserLoginData): Promise<AxiosResponse<AuthToken>> {
    const res = await ManagerAppApi.post<AuthToken>(`/auth/signin`, userData);
    // console.log('resp signIn', res);
    localStorage.setItem('token', res.data.token);
    return res;
  }
}

export default AuthApi;
