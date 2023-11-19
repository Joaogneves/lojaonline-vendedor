import { User, UserLogin, UserName, UserPassword } from './../model/User';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { ClienteService } from '../cliente.service';
import { DataCliente } from '../model/Cliente';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  userName: string = ''
  cpf: string = '';
  role: string = '';
  errorMessage: string = '';
  errorMessageNewPassword: string = '';
  errorLogin: boolean = false;
  user: UserLogin = {
    cpf: '',
    password: ''
  };

  password1: string = '';
  password2: string = '';
  notEquals: boolean = false;
  cont: number = 0;
  contador: string = '';
  cliente$ = new Observable<DataCliente[]>()
  @ViewChild('passwordInput') inputElement!: ElementRef;
  
  constructor(private service: UserService, private clienteService: ClienteService) { }
  ngOnInit(): void {
    this.getUser();
    this.getClientes();
    this.cliente$.subscribe(
      res => {
        res.forEach(c => {
          !c.cliente.isServed
          this.cont++;
          console.log(this.cont)
        })
        localStorage.setItem('clientes', this.cont.toString());
      }
    )

    this.contador = localStorage.getItem('clientes')!;
  }

  enterLogin() {
    this.login();
  }

  login() {
    this.user.cpf = this.user.cpf.replace(/[.-]/g, '');
    this.service.login(this.user).subscribe(
      (res) => {
        window.location.href = '/';
      },
      (error) => {
        this.errorLogin = true;
        this.errorMessage = 'CPF ou senha incorretos. Tente novamente';
        this.errorMessageNewPassword = 'Se esqueceu sua senha entre em contato com o seu gerente';
      }
    );
  }

  selectPassword() {
    this.inputElement.nativeElement.focus();
  }
  getUser() {
    this.cpf = localStorage.getItem("cpf")!;
    this.service.findUser(this.cpf).subscribe(
      res => {
        this.userName = res.firstName + ' ' + res.lastName;
        localStorage.setItem('user_role', res.role!);
        this.role = localStorage.getItem('user_role')!;
      }
    );
  }

  logout() {
    localStorage.clear();
    window.location.href = '/'
  }

  setPassword() {
    if (this.password1 === this.password2) {
      const userPassword: UserPassword = {
        password: this.password1
      }
      const id = localStorage.getItem('userId')!;
      this.service.setNewPassword(id, userPassword).subscribe(_ => {
        window.location.href = '/allusers';
      })
      this.notEquals = false;
    }
    else {
      this.notEquals = true;
    }
  }

  getClientes() {
    this.cliente$ = this.clienteService.getAllNotServed();
  }
}