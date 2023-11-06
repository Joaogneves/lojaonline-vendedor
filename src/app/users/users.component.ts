import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserSalles } from '../model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user$ = new Observable<UserSalles[]>();
  userSelected: string = 'Selecione um vendedor';
  userId: string = '';
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

}
