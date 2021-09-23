import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {LoginDto} from "../dto-models/login-dto.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(data: any): Observable<any> {
    return this.http.post(environment.api_endpoint + 'api/User/login', {
      userName: data?.userName,
      password: data?.password
    });
  }
}
