import {Component, OnInit} from '@angular/core';
import {GaurdianNewsServiceClient} from '../services/GaurdianNewsServiceClient';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {EDITOR} from '../constants';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-summary-editor',
  templateUrl: './summary-editor.component.html',
  styleUrls: ['./summary-editor.component.css']
})
export class SummaryEditorComponent implements OnInit {

  constructor(private service: GaurdianNewsServiceClient,
              private userService: UserServiceClient,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.userService.currentUser.subscribe(user => this.user = user);
  }
  user: User;
  model: '';
  newsContentList = [];
  searchQuery = '';
  page = '1';

  ngOnInit() {
    if (!this.user || !this.user.role || this.user.role !== EDITOR) {
      console.log(this.user);
      this.router.navigate(['home']);
      this.snackBar.open('Login as editor to summarize',
        'Will Do!',
        {duration: 2000});
    } else {
      this.service.findNewsContent(1, this.searchQuery)
        .then(res => this.newsContentList = res.response.results);
    }
  }


  // search = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(400),
  //     distinctUntilChanged(),
  //     map(term => term.length < 2 ? []
  //       : this.getTagNames(term)
  //   ))

  searchArticles() {
    this.service
      .findNewsContent(this.page, this.searchQuery)
      .then(res => this.newsContentList = res.response.results);
  }

  private getTagNames(term: string) {
    return this.service
      .findNewsTags(term)
      .then(res => res.results.map(result => result.id));
  }
}
