import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login: boolean = false;
  userId: string = '';
  constructor(private userService: UserService){}


  ngOnInit(): void {
    this.login = localStorage.getItem("token") ? true : false;
    this.getUserId();
  }

  getUserId() {
    this.userService.findUser(localStorage.getItem('cpf')!).subscribe(
      res => {
        this.userId = res.id!;
        localStorage.setItem('userId', this.userId);
      }
    );
  }

}
