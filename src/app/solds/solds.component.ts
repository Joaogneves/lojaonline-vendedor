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
    this.getSolds();
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

  getSolds() {
    this.cars$ = this.service.getAllSolds();
  }

}
