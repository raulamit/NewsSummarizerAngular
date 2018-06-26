import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  user;
  editors = [];

  constructor(private userService: UserServiceClient,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.userService.currentUser.subscribe(user => this.user = user);
    this.findAllEditors();
  }

  findAllEditors() {
    this.userService.getAllEditors()
      .then(editors => this.editors = editors)
      .then(() => console.log(this.editors));

  }

  find(id) {
    const i = this.user.editorsFollowed.find(function (editor) {
      return editor.id === id;
    });
    if (i) {return true;
    } else {return false;
    }
  }

  followEditor(editor) {
    this.userService.followEditor(editor)
      .then(user => this.user = user)
      .then(user => this.userService.changeUser(this.user));
  }

  unfollowEditor(editor) {
    this.userService.unfollowEditor(editor)
      .then(user => this.user = user)
      .then(user => this.userService.changeUser(this.user));
  }


  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.user = user);
    console.log(this.user.editorsFollowed);

  }

}
