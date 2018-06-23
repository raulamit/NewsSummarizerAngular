import {JAVA_SERVER_URL} from '../constants';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../models/user.model.client';

@Injectable()
export class UserServiceClient {

  URL = JAVA_SERVER_URL;

  private loggedInUserSource = new BehaviorSubject<User>(null);
  currentUser = this.loggedInUserSource.asObservable();



  changeUser(user: User) {
    this.loggedInUserSource.next(user);
  }

  profile() {
    return fetch(this.URL + '/api/profile',
      {
        credentials: 'same-origin', // include, same-origin, *omit
      })
      .then(response => response.json());
      // .then(user => console.log(user));
  }

  // loadUser() {
  //   return fetch(this.URL + '/api/load',
  //     {
  //       credentials: 'include', // include, same-origin, *omit
  //     })
  //     .then(response => response.json());
  // }

  login(username: String, password: String) {
    const user = {
      username: username,
      password: password
    };
    return fetch(this.URL + '/api/login',
      {
        body: JSON.stringify(user),
        method: 'post',
        credentials: 'omit', // include, same-origin, *omit
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json());
  }
  // logout() {
  //   return fetch(this.URL + '/api/logout',
  //     {
  //       method: 'post',
  //       credentials: 'include', // include, same-origin, *omit
  //     })
  //     .then();
  // }
}
