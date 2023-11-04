import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login: boolean = false;
  
  ngOnInit(): void {
    this.login = localStorage.getItem("token") ? true : false;
    console.log(this.login);
  }


}
