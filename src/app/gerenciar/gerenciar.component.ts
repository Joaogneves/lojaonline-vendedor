import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../model/Car';
import { Observable } from 'rxjs';
import { DataCliente } from '../model/Cliente';
import { ClienteService } from '../cliente.service';
declare var $: any;


@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.css']
})
export class GerenciarComponent implements OnInit {

  userId: string = '';
  cars$ = new Observable<Car[]>();
  carId: string = '';
  cliente$ = new Observable<DataCliente[]>();
  clienteId$ = new Observable<DataCliente>();
  clienteSelected: string = '--Selecione o cliente--';
  constructor(private service: CarService, private userService: UserService, private clienteService: ClienteService ) {
    
  }

  ngOnInit(): void {
    this.getAll();
    this.cars$.subscribe(cars => {
      
    }); 
    this.getUser();
    this.userId = localStorage.getItem("userId")!;
    this.getClientes();
  }

  getAll() {
    this.cars$ = this.service.getCars();
  }

  soldCar() {
    console.log('carId', this.carId)
    console.log('UserId', this.userId)
    console.log('ClienteId', this.clienteSelected);
    this.service.soldCar(this.carId, this.userId, this.clienteSelected);
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

  getClientes() {
    this.cliente$ = this.clienteService.getAll();
  }

  getId(id: string) {
    this.carId = id;
  }

  escolher(id:string) {
    this.clienteId$ = this.clienteService.getById(id)
    if(this.clienteId$.subscribe(res => res.cliente.isServed == true)) {
      console.log("Não pode")
    } 
    else {
      console.log("Pode")
    }
  }
}
