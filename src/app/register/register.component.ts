import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  username;
  password1;
  password2;

  register(username, password1, password2) {
    if (password1 === password2) {
      this.userService.register(username, password1)
        .then(user =>  this.userService.changeUser(user))
        .then(() => this.router.navigate(['profile']));
    } else {
      alert('Passwords don\'t match');
      console.log('in else');
      this.username = '';
      this.password1 = '';
    }
  }

  ngOnInit() {
  }

}
