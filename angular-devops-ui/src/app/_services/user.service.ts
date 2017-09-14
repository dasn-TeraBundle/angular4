import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private loginUrl = "/auth/login";

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Promise<Boolean> {
    let body = "username=" + username + "&password=" + password;
    return this.http.post(this.loginUrl, body,{
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    })
      .toPromise()
      .then(response => {
        console.log(response);
        return true;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<Boolean> {
    //console.error('An error occurred', error);
    return Promise.reject(false);
  }
}
