import { Component, OnInit } from '@angular/core';
import {SummaryServiceClient} from '../services/summary.service.client';
import {Summary} from '../models/summary.model.client';

@Component({
  selector: 'app-summary-explorer',
  templateUrl: './summary-explorer.component.html',
  styleUrls: ['./summary-explorer.component.css']
})
export class SummaryExplorerComponent implements OnInit {

  constructor(private service: SummaryServiceClient) { }
  summaries = [];
  currentSummaryIndex = 0;
  ngOnInit() {
    this.service.getNextBatch()
      .then(summaries => {
        this.summaries = summaries;
        console.log(this.summaries);
      });
  }

  prev() {
    this.currentSummaryIndex = this.currentSummaryIndex - 1;
  }
   next() {
      if (this.currentSummaryIndex < this.summaries.length) {
        this.currentSummaryIndex = this.currentSummaryIndex + 1;
      } else {
        // todo: load more summaries
        this.currentSummaryIndex = this.currentSummaryIndex + 1;
      }
   }

}
