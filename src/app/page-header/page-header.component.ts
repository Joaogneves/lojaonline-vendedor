import { User, UserLogin, UserName, UserPassword } from './../model/User';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

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

  constructor(private service: UserService) { }
  ngOnInit(): void {
    this.getUser();
    console.log(this.role)
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
    if(this.password1 === this.password2) {
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
}
