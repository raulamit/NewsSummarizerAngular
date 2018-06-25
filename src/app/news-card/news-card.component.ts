import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  constructor() { }
  @Input() summary;

  ngOnInit() {
    // todo: remove after summary object loaded from parent
    console.log(this.summary);
    if (!this.summary.review) {
      this.summary.review = []
    }
    for (let i = 0; i < 20; i++) {
        this.summary.reviews.push(`review${i + 1}`);
    }
    console.log(this.summary);
  }

}
