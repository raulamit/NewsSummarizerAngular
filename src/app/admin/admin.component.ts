import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: UserServiceClient) { }

  users: User[] = [];
  selectedUser: User;
  newUser: User = new User();
  editMode = false;

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
    this.resetUser();
    this.findAllUsers();
    this.selectedUser = this.newUser;
  }

}
