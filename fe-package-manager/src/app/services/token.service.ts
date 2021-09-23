import {Injectable} from '@angular/core';
import {UserDto} from "../dto-models/user-dto.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }

  public getToken(): string | boolean {
    return window.sessionStorage.getItem(environment.session_token_key) ?? false;
  }

  public setToken(token: string): void {
    window.sessionStorage.setItem(environment.session_token_key, token);
  }

  public getUser(): UserDto | boolean {
    const user = window.sessionStorage.getItem(environment.session_user_key);

    if (user) {
      return new UserDto(JSON.parse(user));
    } else {
      return false;
    }
  }

  public setUser(user: UserDto): void {
    window.sessionStorage.setItem(environment.session_user_key, JSON.stringify(user));
  }

}
