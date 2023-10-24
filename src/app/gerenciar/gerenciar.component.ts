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

  cars$ = new Observable<Car[]>();
  constructor(private service: CarService) {
    
  }

  ngOnInit(): void {
    this.getAll();
    this.cars$.subscribe(cars => {
      console.log('Cars:', cars);
    }); 
  }

  getAll() {
    this.cars$ = this.service.getCars();
  }

  soldCar(id: string) {
    this.service.soldCar(id).subscribe(_ => {
      window.location.href = '/solds';
    })
  }

  deleteCar(id: string) {
    this.service.deleteCar(id).subscribe(_ => {
      this.getAll();
    })
  }
}
