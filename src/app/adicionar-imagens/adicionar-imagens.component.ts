import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CarPicture } from './../model/Car';
import { CarService } from '../car.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adicionar-imagens',
  templateUrl: './adicionar-imagens.component.html',
  styleUrls: ['./adicionar-imagens.component.css']
})
export class AdicionarImagensComponent implements OnInit {

  carPicture: string = '';
  id: string = '';
  constructor(private service: CarService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  next() {
    window.location.href = '/optadd/' + this.id
  }

  saveImage() {

    const cp:CarPicture = {
      id: "5c08cfde-6fbf-11ee-b962-0242ac120002",
      imgUrl: this.carPicture
    }

    this.service.saveImage(this.id, cp).subscribe(
      response => {
        alert("Imagem adicionada")
        window.location.href = '/imgadd/' + this.id
      }
        )
  }


}
