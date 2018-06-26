import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {ADMIN, EDITOR} from '../constants';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.service.currentUser.subscribe(user => this.user = user);
  }

  users: User[] = [];
  selectedUser: User;
  newUser: User = new User();
  editMode = false;
  user;

  editUser(user: User) {
    this.editMode = true;
    this.selectedUser = user;
  }
  resetUser() {
    this.newUser.username = '';
    this.newUser.password = '';
    this.newUser.firstName = '';
    this.newUser.lastName = '';
    this.newUser.role = '';
    this.newUser.phone = '';
    this.newUser.email = '';
    this.editMode = false;
    this.selectedUser = this.newUser;
    this.findAllUsers();
  }
  updateUser(user: User) {
    this.service.updateUser(user)
      .then(() => this.findAllUsers())
      .then(() => this.editMode = false);
  }
  findAllUsers() {
    this.service.findAllUsers()
      .then(users => this.users = users);
  }
  createUser(user: User) {
    this.service.createUser(user)
      .then(newUser => this.users.push(newUser))
      .then(() => this.resetUser())
      .then(() => this.selectedUser = this.newUser);
  }
  delete(user: User) {
    this.service.deleteUser(user.id)
      .then(() => this.findAllUsers());
  }
  findUserByUsername(username: String) {
    this.service.findUserByUsername(username)
      .then(users => this.users = users);
  }

  ngOnInit() {
    if (!this.user || !this.user.role || this.user.role !== ADMIN) {
      this.router.navigate(['home']);
      this.snackBar.open('You need to Login as Admin',
        'Will Do!',
        {duration: 2000});
    } else {
    this.resetUser();
    this.findAllUsers();
    this.selectedUser = this.newUser;
    }
  }

}
