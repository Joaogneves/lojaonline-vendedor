import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Observable, map, tap } from 'rxjs';
import { Car } from '../model/Car';

@Component({
  selector: 'app-solds',
  templateUrl: './solds.component.html',
  styleUrls: ['./solds.component.css']
})
export class SoldsComponent implements OnInit {
  constructor(private service: CarService) { }
  cars$ = new Observable<Car[]>()

  total: number = 0;

  ngOnInit(): void {
    this.getSoldsBySeller();
    this.cars$.subscribe(
      car => {
        car.forEach(
          (c) => {
            this.total += parseFloat(c.price!)
            console.log(this.total);
          }
        )
      }
    )
    
  }

  getSoldsBySeller() {
    this.cars$  = this.service.getSoldsbySeller(localStorage.getItem("userId")!)
  }

  getSolds() {
    //this.cars$ = this.service.getAllSolds();
  }

}
