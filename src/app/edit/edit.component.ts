import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Car, CarOptionals } from '../model/Car';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string = '';
  years: number[] = [];
  transmission: string[] = ['AUTOMATICO', 'MANUAL'];
  colorCar: string[] = [
    'BRANCO',
    'PRETO',
    'PRATA',
    'CINZA',
    'AZUL',
    'VERMELHO',
    'AMARELO',
    'VERDE',
    'LARANJA',
    'MARROM'
  ]
  fuelType: string[] = ['GASOLINA', 'ETANOL', 'FLEX']

  carBrand = '';
  name = '';
  description = '';
  carYear = 'ESCOLHA O ANO DO CARRO';
  price = '';
  isSold = '';
  isDeleted = '';
  pictureUrl = '';
  fuel = 'ESCOLHA O TIPO DE COMBUSTIVEL';
  transmissionType = 'ESCOLHA O TIPO DE TRANSMISSÂO';
  carColor = 'ESCOLHA UMA COR';
  km = '';

  optId: string = '';

  electricWindow: boolean = false
  eletricLocks: boolean = false
  airConditioning: boolean = false
  hidraulicSteering: boolean = false
  airbags: boolean = false
  multmedia: boolean = false
  alarm: boolean = false

  opts$ = new Observable<CarOptionals>();
  car$ = new Observable<Car>();
  

  constructor(private service: CarService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    for (let year = 2024; year >= 1990; year--) {
      this.years.push(year);
    }
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getCar(this.id);
    this.car$.subscribe(
      cars => {
        this.carBrand = cars.carBrand!
        this.name = cars.name!
        this.description = cars.description!
        this.carYear = cars.carYear!
        this.price = cars.price!
        this.pictureUrl = cars.picture!
        this.fuel = cars.fuel!
        this.transmissionType = cars.transmissionType!
        this.carColor = cars.carColor!
        this.km = cars.km!
      }
    )
    this.getOpts(this.id)
    this.opts$.subscribe(
      opts => {
        if (opts) {
          this.optId = opts.id!;
          this.electricWindow = opts.electricWindow!;
          this.eletricLocks = opts.eletricLocks!;
          this.airConditioning = opts.airConditioning!;
          this.hidraulicSteering = opts.hidraulicSteering!;
          this.airbags = opts.airbags!;
          this.multmedia = opts.multmedia!;
          this.alarm = opts.alarm!;
          console.log(this.optId);
        } else {
          console.error('Objeto opts é nulo ou indefinido.');
          console.log(this.id)
          window.location.href = '/optadd/' + this.id
        }
      },
      error => {
        console.error('Erro ao receber opts:', error);
        // Trate o erro conforme necessário para o seu aplicativo
      }
    );
    
  }

  salvarOpcionais() {
    const op: CarOptionals = {
      id: this.optId,
      electricWindow: this.electricWindow,
      eletricLocks: this.eletricLocks,
      airConditioning: this.airConditioning,
      hidraulicSteering: this.hidraulicSteering,
      airbags: this.airbags,
      multmedia: this.multmedia,
      alarm: this.alarm
    }
    
    if(this.optId != '') {
      console.log(this.optId)
    } else {
      console.log('nulo')
    }

    this.service.updateOpts(this.optId, op).subscribe(
      res => {
        alert('Opcionais salvos')
      }
    )
  }

  saveCar() {
    const car: Car = {
      carBrand: this.carBrand,
      name: this.name,
      description: this.description,
      carYear: this.carYear,
      price: this.price,
      isSold: false,
      isDeleted: false,
      fuel: this.fuel,
      transmissionType: this.transmissionType,
      carColor: this.carColor,
      km: this.km,
    }

    this.service.editCar(this.id, car).subscribe(
      res => {
        console.log()
      }
    )
    window.location.href = '/';
  }

  getOpts(id: string) {
    this.opts$ = this.service.getOpts(id);
  }

  getCar(id: string) {
    this.car$ = this.service.getCar(id);
  }
}
