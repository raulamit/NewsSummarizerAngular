import {JAVA_SERVER_URL} from '../constants';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../models/user.model.client';

@Injectable()
export class UserServiceClient {

  URL = JAVA_SERVER_URL;

  testUser: User = {
    username: 'amit',
    password: 'pass',
    firstName: null,
    lastName: 'Raul',
    email: null,
    phone: null,
    dob: null,
    role: null,
  };
  private loggedInUserSource = new BehaviorSubject<User>(this.testUser);
  currentUser = this.loggedInUserSource.asObservable();


  updateUser(user: User) {
    this.loggedInUserSource.next(user);
    // TODO: code to update data in the database
  }

  profile() {
    return fetch(this.URL + '/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
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
        credentials: 'include', // include, same-origin, *omit
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json());
  }

  register(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(this.URL + '/api/register', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch(this.URL + '/api/logout',
      {
        method: 'post',
        credentials: 'include', // include, same-origin, *omit
      })
      .then();
  }
}
