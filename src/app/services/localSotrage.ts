import { SocialUser } from "angularx-social-login";

export class LocalStorageUtils {

  public getUser(){
      return JSON.parse(localStorage.getItem('apiMarvel.user') as string)  ;
  }

  public clearUserLocalData() {
      localStorage.removeItem('apiMarvel.token');
      localStorage.removeItem('apiMarvel.user');
  }

  public getTokenUser(): string {
      return localStorage.getItem('apiMarvel.token') as string;
  }

  public saveTokenUser(token: string) {
      localStorage.setItem('apiMarvel.token', token);
  }

  public saveUser(user: string | SocialUser) {
      localStorage.setItem('apiMarvel.user', JSON.stringify(user));
  }

}
