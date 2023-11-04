import { Component, OnInit } from '@angular/core';
import { CarOptionals } from '../model/Car';
import { CarService } from '../car.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adicionar-opcionais',
  templateUrl: './adicionar-opcionais.component.html',
  styleUrls: ['./adicionar-opcionais.component.css']
})
export class AdicionarOpcionaisComponent implements OnInit {

  optId: string = '';

  electricWindow: boolean = false
  eletricLocks: boolean = false
  airConditioning: boolean = false
  hidraulicSteering: boolean = false
  airbags: boolean = false
  multmedia: boolean = false
  alarm: boolean = false
  id: string = '';

  opts$ = new Observable<CarOptionals>();

  constructor(private service: CarService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.opts$.subscribe(
      opts => {
        this.optId = opts.id!
      }
    )
    this.getOpts(this.id)
  }
  
  adicionar() {
    const op: CarOptionals = {
      id: "5c08cfde-6fbf-11ee-b962-0242ac120002",
      electricWindow: this.electricWindow,
      eletricLocks: this.eletricLocks,
      airConditioning: this.airConditioning,
      hidraulicSteering: this.hidraulicSteering,
      airbags: this.airbags,
      multmedia: this.multmedia,
      alarm: this.alarm
  }

  this.service.adicionarOpts(this.id, op).subscribe(
    res => {
      alert("Alualizado")
    }
  )
}

getOpts(id:string) {
  this.opts$ = this.service.getOpts(id);
}

terminar() {
  console.log('')
  window.location.href = '/';
}

}
