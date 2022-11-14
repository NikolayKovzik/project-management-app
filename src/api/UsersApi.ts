import { AxiosError } from 'axios';

import ManagerAppApi from './RestService';

type UserRegistrationData = {
  name: string;
  login: string;
  password: string;
};

type UserBasicData = {
  login: string;
  name: string;
  _id: string;
};

type SignUpResponse = {
  status: number;
  data: UserBasicData | string;
};

class UsersApi {
  static async signUp(userData: UserRegistrationData): Promise<SignUpResponse> {
    try {
      const res = await ManagerAppApi.post(`/auth/signup`, userData);
      console.log('resp', res);
      return {
        status: res.status,
        data: res.data,
      };
    } catch (err: unknown) {
      console.log(err);
      return {
        status: 409,
        data: 'hmmmm',
      };
    }
  }

  // static async getUsers() {
  //   const res = await ManagerAppAPI.get(`/`);
  //   return {
  //     status: res.status,
  //     data: res.data,
  //   };
  // }
}

export default UsersApi;
