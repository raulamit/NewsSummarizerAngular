import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;

  constructor(private userService: UserServiceClient,
              private router: Router) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => console.log(user));
    // console.log(this.user);
    // this.userService.changeUser(this.user);
  }

}
