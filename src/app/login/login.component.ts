import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient,
              private snackBar: MatSnackBar) {


  }

  username = '';
  password;
  user;

  login(username, password) {
    this.userService
      .login(username, password)
      .then((user) =>  {
        if (user.username === username) {
          this.snackBar.open('User Logged In',
            'dismiss',
            {duration: 2000});
          this.userService.changeUser(user);
          if (this.user.role === 'Administrator') {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['home']);
          }
        } else {
          this.snackBar.open('Invalid Credentials',
            'dismiss',
            {duration: 3000});
          this.username = '';
          this.password = '';
          }
      });
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.user = user);

  }

}
