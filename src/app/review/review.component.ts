import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor() { }
  @Input() review;
  rating = 3;
  ngOnInit() {
  }

  getNumber(num) {
    return new Array(num);
  }
}
