import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User, UserLogin, UserName, UserPassword, UserSalles } from './model/User';
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
        localStorage.clear()
        return throwError(error);
      })
    );
  }

  findAllUsers(){
    return this.http.get<UserSalles[]>(`${this.urlApi}/users`);
  }

  findUser(cpf:string) {
    return this.http.get<UserName>(`${this.urlApi}/users/${cpf}`);
  }

  registerUser(user: User) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<User>(`${this.urlApi}/auth/register`, user, {headers});
  }

  getAuthorizationToken() {
    return localStorage.getItem('token');
  }

  isTokenExpired(token: string) {
    return false;
  }

  setNewPassword(id:string, password: UserPassword) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<UserPassword>(`${this.urlApi}/users/newpassword/${id}`, password, {headers});
  }

  isActiveSet(id: string) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<UserPassword>(`${this.urlApi}/users/setstatus/${id}`, null, {headers});
  }
}
