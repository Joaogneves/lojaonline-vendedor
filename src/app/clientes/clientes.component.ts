import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { DataCliente } from '../model/Cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  cliente$ = new Observable<DataCliente[]>();

  constructor(private service: ClienteService){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.cliente$ = this.service.getAll();
    console.log(this.cliente$)
  }

}
