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
  newUser = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    role: '',
    phone: '',
    email: ''
  }
  editMode = false;

  editUser(user: User) {
    this.editMode = true;
    this.selectedUser = user;
  }
  updateUser(user: User){
    this.service.updateUser(user)
      .then(() => this.findAllUsers())
      .then(() => this.editMode = false);
  }
  findAllUsers(){
    this.service.findAllUsers()
      .then(users => this.users = users);
  }
  createUser(user: User) {
    this.service.createUser(user)
      .then(newUser => this.users.push(newUser))
      .then(() => this.selectedUser = this.newUser);
  }
  delete(user: User) {
    this.service.deleteUser(user.id)
      .then(() => this.findAllUsers());
  }

  ngOnInit() {
    this.findAllUsers();
    this.selectedUser = this.newUser;
  }

}
