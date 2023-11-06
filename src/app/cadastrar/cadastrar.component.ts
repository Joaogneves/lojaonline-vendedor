import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    cpf: '',
    password: '',
    role: ''
  }

  constructor(private service: UserService) { }

  ngOnInit(): void {

  }

  register() {
    this.user.cpf = this.user.cpf.replace(/[.-]/g, '');
    console.log(this.user);
    this.service.registerUser(this.user).subscribe(
      res => {
        location.href = ''
      }
    );
  }

}
