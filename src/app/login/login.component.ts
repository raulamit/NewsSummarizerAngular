import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  username;
  password;
  user;

  login(username, password) {
    console.log([username, password]);
    this.userService
      .login(username, password)
      .then((user) => {
        this.userService.updateUser(user);
        this.router.navigate(['profile']);
      });
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.user = user);

  }

}
