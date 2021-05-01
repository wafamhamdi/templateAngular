import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {User}from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isLoggedIn = false;
  currentUser: User;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
