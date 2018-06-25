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
              private userService: UserServiceClient) {
    this.userService.currentUser.subscribe(user => this.user = user);
  }
  user;

  logout() {
    this.userService.logout()
      .then(() => (
        this.loadUser()
      ))
      .then(() => this.router.navigate(['home']));
  }
  loadUser() {
    this.userService.profile()
      .catch(err => console.log('logout'))
      .then(user => this.user = user)
      .then(() => {
        this.userService.changeUser(this.user);
        console.log(this.user);
      });
  }

  ngOnInit() {
    this.loadUser();
  }

}
