import {Component, Input, OnInit} from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private config: NgbRatingConfig) {
    config.max = 5;
  }
  @Input() review;
  // rating = 3;
  ngOnInit() {
  }

  getNumber(num) {
    return new Array(num);
  }
  thumbsUp() {
    return;
  }
  thumbsDown() {
    return;
  }
}
