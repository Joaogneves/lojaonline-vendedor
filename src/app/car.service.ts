import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

import { Car, CarOptionals, CarPicture } from './model/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private urlApi = environment.api;

  constructor(private http: HttpClient) { }

  registerCar(car: Car) {
    return this.http.post<Car>(this.urlApi + '/cars', car)
  }

  getCars() {
    return this.http.get<Car[]>(this.urlApi + '/cars');
  }

  getCar(id: string) {
    return this.http.get<Car>(this.urlApi + '/cars/' + id);
  }

  soldCar(id: string) {
    
    return this.http.put<Car>(this.urlApi + '/cars/' + id, null);
  }

  editCar(id: string, car:Car) {
    return this.http.put<Car>(this.urlApi + '/cars/update/' + id, car);
  }

  deleteCar(id: string) {
    return this.http.delete<Car>(this.urlApi + '/cars/' + id);
  }

  saveImage(id:string, cp: CarPicture) {
    return this.http.post<CarPicture>(this.urlApi + '/cars/images?id=' + id , cp);
  }

  adicionarOpts(id:string, op:CarOptionals) {
    return this.http.post<CarOptionals>(this.urlApi + '/cars/optionals?id=' + id, op)
  }

  getOpts(id:string) {
    return this.http.get<CarOptionals>(this.urlApi + '/cars/optionals/' + id)
  }

  deleteOpts(id:string) {
    return this.http.delete<CarOptionals>(this.urlApi + 'cars/optionals/delete/' + id)
  }

  updateOpts(optId:string, op: CarOptionals) {
    console.log(optId);
    return this.http.put<CarOptionals>(this.urlApi + '/cars/optionals/update/' + optId, op)
  }

  getAllSolds() {
    return this.http.get<Car[]>(this.urlApi + '/cars/solds');
  }
}
