import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient,
              private snackBar: MatSnackBar) { }

  username;
  password1;
  password2;
  role;

  reset(){
    this.username = '';
    this.password1 = '';
    this.password2 = '';
<<<<<<< HEAD
    this.role = 'READER';
=======
    this.role = 'Reader';
>>>>>>> master
  }

  register(username, password1, password2, role) {
    if (password1 === password2) {
      this.userService.register(username, password1, role)
        .then(user =>  {
          if (user.username !== username) {
            this.snackBar.open('User already exists. ',
              'dismiss',
              {duration: 3000});
            this.reset();
          } else {
            this.userService.changeUser(user);
            this.router.navigate(['profile']);
          }
        });
    } else {
      this.snackBar.open('Passwords don\'t match',
        'dismiss',
        {duration: 3000});
      this.username = '';
      this.password1 = '';
    }
  }

  ngOnInit() {
    this.reset();
  }

}
