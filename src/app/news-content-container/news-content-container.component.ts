import {Component, Input, OnInit} from '@angular/core';
import {GaurdianNewsServiceClient} from '../services/GaurdianNewsServiceClient';
import {Summary} from '../models/summary.model.client';
import {SummaryServiceClient} from '../services/summary.service.client';
import {MatSnackBar} from '@angular/material';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-news-content-container',
  templateUrl: './news-content-container.component.html',
  styleUrls: ['./news-content-container.component.css']
})
export class NewsContentContainerComponent implements OnInit {

  constructor(private service: GaurdianNewsServiceClient,
              private summaryService: SummaryServiceClient,
              private snackBar: MatSnackBar,
              private userService: UserServiceClient) {
    this.userService.currentUser.subscribe(user => this.user = user);
  }
  @Input() content;
  active = false;
  summary: Summary = new Summary();
  user;
  ngOnInit() {
    this.summary.sourceId = this.content.id;
    this.summary.title = this.content.webTitle;
  }

  toggleState() {
    this.active = !this.active;
  }
  saveSummary() {
    this.summaryService
      .saveNewsSummary(this.summary)
      .then(res => this.snackBar.open('Summary Saved',
        'dismiss',
        {duration: 2000}))
      .then(t => this.toggleState());
  }
}
