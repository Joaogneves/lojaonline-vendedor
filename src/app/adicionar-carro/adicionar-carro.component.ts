import { HttpHeaders } from '@angular/common/http';
import { Car } from './../model/Car';
import { Component, OnInit } from '@angular/core';

import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-carro',
  templateUrl: './adicionar-carro.component.html',
  styleUrls: ['./adicionar-carro.component.css']
})
export class AdicionarCarroComponent implements OnInit{
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
  renavan = '';
  placa = '';

  mercosul: boolean = true;

  constructor(private service: CarService, private router: Router) {
    for (let year = 2024; year >= 1970; year--) {
      this.years.push(year);
    }
  }
  ngOnInit(): void {
    
  }


  saveCar() {
    this.price = this.price.replace(/[.,]/g, '');
    this.km = this.km.replace(/[.]/g, '');
    this.placa = this.placa.replace(/[-]/g, '')
    this.placa = this.placa.toUpperCase();
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
      placa: this.placa,
      renavan: this.renavan,
    }
    console.log(car);
    this.service.registerCar(car).subscribe(
      response => {
        window.location.href = '/imgadd/' + response.id
      }
        )
  }

  setMercosul() {
    this.mercosul = !this.mercosul
  }
}
