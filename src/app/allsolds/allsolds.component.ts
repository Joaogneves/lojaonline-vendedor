import { UserSalles } from './../model/User';
import { Observable } from 'rxjs';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../model/Car';

@Component({
  selector: 'app-allsolds',
  templateUrl: './allsolds.component.html',
  styleUrls: ['./allsolds.component.css']
})
export class AllsoldsComponent implements OnInit {
  
  user$ = new Observable<UserSalles[]>();
  userSelected: string = '';
  total: number = 0;

  cars$ = new Observable<Car[]>();

  constructor(private userService: UserService, private carService: CarService){}

  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.cars$)
  }

  getAllUsers(){
    this.user$ = this.userService.findAllUsers();
  }

  get() {
    if(this.userSelected == 'all') {
      this.cars$ = this.carService.getAllSolds()
    } 
    else {
      this.cars$ = this.carService.getSoldsbySeller(this.userSelected);
    }
    this.total = 0;
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

}
