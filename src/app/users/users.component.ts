import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserPassword, UserSalles } from '../model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user$ = new Observable<UserSalles[]>();
  userSelected: string = 'Selecione um vendedor';
  userId: string = '';
  password1: string = '';
  password2: string = '';
  notEquals: boolean = false;
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getAll();
    console.log(this.user$)
  }

  getAll() {
    this.user$ = this.userService.findAllUsers();
  }

  get(id: string) {
    console.log(id)
  }

  getId(id: string) {
    this.userId = id;
  }

  setPassword() {
    if(this.password1 === this.password2) {
      const userPassword: UserPassword = {
        password: this.password1
      }
      const id = this.userId;
      this.userService.setNewPassword(id, userPassword).subscribe(_ => {
        window.location.href = '/allusers';
      })
      this.notEquals = false;
    }
    else {
      this.notEquals = true;
    }
  }
}
