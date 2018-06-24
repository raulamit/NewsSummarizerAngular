import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient) { }
  user;

  logout() {
    this.userService.logout()
      .then(() => (
        this.userService.updateUser(this.userService.testUser)));
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.user = user);

  }

}
