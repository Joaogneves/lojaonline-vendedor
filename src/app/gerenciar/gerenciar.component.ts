import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../model/Car';
import { Observable } from 'rxjs';
declare var $: any;


@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.css']
})
export class GerenciarComponent implements OnInit {

  userId: string = ''
  cars$ = new Observable<Car[]>();
  constructor(private service: CarService, private userService: UserService ) {
    
  }

  ngOnInit(): void {
    this.getAll();
    this.cars$.subscribe(cars => {
      
    }); 
    this.getUser();
    this.userId = localStorage.getItem("userId")!;
  }

  getAll() {
    this.cars$ = this.service.getCars();
  }

  soldCar(id: string) {
    this.service.soldCar(id, this.userId).subscribe(_ => {
      window.location.href = '/solds';
    })
  }

  deleteCar(id: string) {
    this.service.deleteCar(id).subscribe(_ => {
      this.getAll();
    })
  }

  getUser() {
    const cpf = localStorage.getItem("cpf")!;
    this.userService.findUser(cpf).subscribe(
      res => {
        this.userId = res.id!;
        localStorage.setItem("userId", this.userId);
      }
    );
  }
}
