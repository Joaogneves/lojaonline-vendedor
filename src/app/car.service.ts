import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { Car, CarOptionals, CarPicture } from './model/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private urlApi = environment.api;
  
  constructor(private http: HttpClient) {
  }

  
  
  registerCar(car: Car) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Car>(this.urlApi + '/cars', car, {headers})
  }
  
  getCars() {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Car[]>(this.urlApi + '/cars', {headers});
  }

  getCar(id: string) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Car>(this.urlApi + '/cars/' + id, {headers});
  }

  soldCar(id: string, userId: string, cliendId: string) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/pdf'
    });
    
    return this.http.put<Car>
            (this.urlApi + '/cars/sell?carId=' + id + '&userId=' + userId + '&clienteId=' + cliendId, null,
             {headers, responseType: 'blob' as 'json' })
             .subscribe(
              (response: any) => {
                const blob = new Blob([response], { type: 'application/pdf' });
                const url = window.URL.createObjectURL(blob);
                window.open(url);
                window.URL.revokeObjectURL(url);
                location.href = '/'
              }
    );
  }

  editCar(id: string, car:Car) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<Car>(this.urlApi + '/cars/update/' + id, car, {headers});
  }

  deleteCar(id: string) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<Car>(this.urlApi + '/cars/' + id, {headers});
  }

  saveImage(id:string, cp: CarPicture) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<CarPicture>(this.urlApi + '/cars/images?id=' + id , cp, {headers});
  }

  adicionarOpts(id:string, op:CarOptionals) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<CarOptionals>(this.urlApi + '/cars/optionals?id=' + id, op, {headers})
  }

  getOpts(id:string) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<CarOptionals>(this.urlApi + '/cars/optionals/' + id, {headers})
  }

  deleteOpts(id:string) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<CarOptionals>(this.urlApi + 'cars/optionals/delete/' + id, {headers})
  }

  updateOpts(optId:string, op: CarOptionals) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    console.log(optId);
    return this.http.put<CarOptionals>(this.urlApi + '/cars/optionals/update/' + optId, op, {headers})
  }

  getAllSolds() {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Car[]>(this.urlApi + '/cars/solds', {headers});
  }

  getSoldsbySeller(id: string) {
    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Car[]>(this.urlApi + '/cars/solds/' + id, {headers});
  }
}
