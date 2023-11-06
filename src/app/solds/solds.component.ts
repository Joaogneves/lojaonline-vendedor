import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Observable, map, tap } from 'rxjs';
import { Car } from '../model/Car';
import { UserService } from '../user.service';

@Component({
  selector: 'app-solds',
  templateUrl: './solds.component.html',
  styleUrls: ['./solds.component.css']
})
export class SoldsComponent implements OnInit {
  constructor(private service: CarService,private uservice: UserService) { }
  cars$ = new Observable<Car[]>()
  userId: string = '';
  total: number = 0;

  ngOnInit(): void {
    const id = localStorage.getItem("userId")!;
    this.getSoldsBySeller(id);
    this.cars$.subscribe(
      car => {
        car.forEach(
          (c) => {
            this.total += parseFloat(c.price!)
          }
        )
      }
    )
    
  }

  getSoldsBySeller(id:string) {
    this.cars$  = this.service.getSoldsbySeller(id);
  }
}
