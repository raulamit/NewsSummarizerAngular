import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {CommentServiceClient} from '../services/comment.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {READER} from '../constants';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'],
  providers: [NgbRatingConfig]
})
export class NewsCardComponent implements OnInit {

  constructor(private config: NgbRatingConfig,
              private service: CommentServiceClient,
              private userService: UserServiceClient) {
    this.userService.currentUser.subscribe(user => this.user = user);
    config.max = 5;
  }
  reader = READER;
  user;
  @Input() summary;
  stars;
  reviewText = '';

  ngOnInit() {
    // todo: remove after summary object loaded from parent
    if (!this.summary.reviews) {
      this.summary.reviews = [];
    }
    console.log(this.summary);
  }

  addComment() {
      this.service
        .addComment(this.reviewText, this.stars, this.summary.id)
        .then(() => this.summary.reviews.push({stars: this.stars, reviewText: this.reviewText}));
  }

}
