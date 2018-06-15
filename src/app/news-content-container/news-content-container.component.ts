import { Component, OnInit } from '@angular/core';
import {GaurdianNewsServiceClient} from '../services/GaurdianNewsServiceClient';

@Component({
  selector: 'app-news-content-container',
  templateUrl: './news-content-container.component.html',
  styleUrls: ['./news-content-container.component.css']
})
export class NewsContentContainerComponent implements OnInit {

  constructor(private service: GaurdianNewsServiceClient) { }
  newsContentList = []
  ngOnInit() {
    this.service.findNewsContent(1)
      .then(res => this.newsContentList = res.response.results);
  }

}
