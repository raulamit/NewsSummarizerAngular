import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;

  constructor(private userService: UserServiceClient,
              private router: Router,
              private snackBar: MatSnackBar) {

    this.userService.currentUser.subscribe(user => this.user = user);

  }


  logout() {
    this.userService.logout()
      .then(() => this.router.navigate(['home']));
  }

  update(user: User) {
    this.userService.updateUser(user)
      .then(newUser => {
        this.userService.changeUser(newUser);
        this.user = newUser;
        return;
      })
      .then(() => this.snackBar.open('User Updated',
        'dismiss',
        {duration: 3000}))
      .then(() => this.user);
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.user = user);
  }

}
