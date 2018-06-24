import {JAVA_SERVER_URL} from '../constants';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../models/user.model.client';

@Injectable()
export class UserServiceClient {

  URL = JAVA_SERVER_URL;

  testUser: User = {
    id: null,
    username: 'amit',
    password: 'pass',
    firstName: null,
    lastName: 'Raul',
    email: null,
    phone: null,
    role: null,
  };
  private loggedInUserSource = new BehaviorSubject<User>(this.testUser);
  currentUser = this.loggedInUserSource.asObservable();

  constructor() { }

  changeUser(user: User) {
    this.loggedInUserSource.next(user);
    // TODO: code to update data in the database
  }

  profile() {
    return fetch(this.URL + '/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json())
      .then(res => {
        if (res) {
          return res;
        } else {
          return this.testUser;
        }
      });
  }

  findAllUsers() {
    return fetch(this.URL + '/api/user',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  findUserByUsername(username) {
    return fetch(this.URL + '/api/user?username=' + username,
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  updateUser(user) {
    return fetch(this.URL + '/api/user/' + user.id,
      {
        body: JSON.stringify(user),
        method: 'put',
        credentials: 'include', // include, same-origin, *omit
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json());
  }

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

  register(username, password, role) {
    const user = {
      username: username,
      password: password,
      role: role
    };
    return fetch(this.URL + '/api/register', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  createUser(user: User) {
    return fetch(this.URL + '/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
  deleteUser(userId) {
    return fetch(this.URL + '/api/user/' + userId,
      {
        method: 'delete',
        credentials: 'include', // include, same-origin, *omit
      });
  }

  logout() {
    return fetch(this.URL + '/api/logout',
      {
        method: 'post',
        credentials: 'include', // include, same-origin, *omit
      })
      .then(() => this.changeUser(this.testUser));
  }
}
