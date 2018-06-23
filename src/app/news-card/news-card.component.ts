import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  constructor() { }
  // @Input() summary;
  summary = {
    id: '1',
    img: '../../assets/img/img1.jpg',
    title: 'Trump backs plan to end family separations but shirks responsibility',
    text: `Donald Trump has told Republicans he is “1,000%” behind their immigration reform effort, but did not offer a clear path forward \
    as his administration faced bipartisan condemnation over separating children and their parents at the border. \n At a closed-door \
    meeting with House Republicans on Capitol Hill, members said Trump expressed concern for the families being separated by the \
    “zero-tolerance” policy, but he did not take responsibility for the practice. Instead, the president urged the Republicans in the room \
    to pass legislation that keeps families together.`,
    reviews: [] // todo: has review text, ratings, user, profile pic, time
  };
  ngOnInit() {
    // todo: remove after summary object loaded from parent
    for (let i = 0; i < 20; i++) {
        this.summary.reviews.push(`review${i + 1}`);
    }
  }

}
