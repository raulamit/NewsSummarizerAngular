import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient) {


  }

  username = '';
  password;
  user;

  login(username, password) {
    this.userService
      .login(username, password)
      .then((user) =>  this.userService.changeUser(user))
      .then(() => {
        if (this.user.username === 'admin') {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['home']);
        }});
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.user = user);

  }

}
