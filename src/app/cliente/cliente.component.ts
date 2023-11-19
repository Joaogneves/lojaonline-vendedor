import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { DataCliente } from '../model/Cliente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente$ = new Observable<DataCliente>();
  constructor(private service: ClienteService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(
      params => {
        let id = params.get('id');
        this.getById(id!);
      }
    )
  }

  getById(id: string) {
    this.cliente$ = this.service.getById(id);
    console.log(this.cliente$.subscribe(
      res => {
        res.cliente.fullName
      }
    ))
  }

  serveCliente(id: string) {
    console.log(id);
    this.service.serveCliente(id).subscribe(
      res => {
        location.href = '/';
      }
    )
  }

  download(id: string) {
    this.service.download(id);
  }

}
