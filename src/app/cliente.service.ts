import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { DataCliente } from './model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlApi = environment.api;
  constructor(private http: HttpClient) { }

  getAll() {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<DataCliente[]>(`${this.urlApi}/clientes`, {headers});
  }
  
  getById(id: string) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<DataCliente>(`${this.urlApi}/clientes/${id}`, {headers});
  }

  getAllNotServed() {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<DataCliente[]>(`${this.urlApi}/clientes/notServed`, {headers});
  }

  serveCliente(id: string) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<any>(`${this.urlApi}/clientes/${id}`, {headers})
  }

}
