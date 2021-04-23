import { Component, OnInit } from '@angular/core';
import {User}from '../../models/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isLoggedIn = false;
  currentUser: User;
  constructor() { }

  ngOnInit() {
  }

}
