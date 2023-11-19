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


  download(id: string) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/pdf'
    });

    this.http.get(`${this.urlApi}/clientes/pdf/${id}`, { headers, responseType: 'blob' as 'json' })
      .subscribe((response: any) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
        window.URL.revokeObjectURL(url);
      });
  }

}
