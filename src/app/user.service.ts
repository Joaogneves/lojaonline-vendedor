import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { UserLogin, UserName } from './model/User';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlApi = environment.api;
  user: UserName = {

  }

  constructor(private http: HttpClient) { }

  login(user: UserLogin) {
    localStorage.setItem('cpf', user.cpf);
    return this.http.post<{ token: string }>(this.urlApi + '/auth/login', user).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
        return response;
      }),
      catchError((error) => {
        console.error('Erro na chamada de login:', error);
        return throwError(error);
      })
    );
  }

  findUser(cpf:string) {
    return this.http.get<UserName>(`${this.urlApi}/users/${cpf}`);
  }

  getAuthorizationToken() {
    return localStorage.getItem('token');
  }

  isTokenExpired(token: string) {
    return false;
  }
}
