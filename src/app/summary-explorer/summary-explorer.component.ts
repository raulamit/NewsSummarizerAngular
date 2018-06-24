import { Component, OnInit } from '@angular/core';
import {SummaryServiceClient} from '../services/summary.service.client';

@Component({
  selector: 'app-summary-explorer',
  templateUrl: './summary-explorer.component.html',
  styleUrls: ['./summary-explorer.component.css']
})
export class SummaryExplorerComponent implements OnInit {

  constructor(private service: SummaryServiceClient) { }
  summaries = [
    'summary 1',
    'summary 2'
    ];
  summariesData; // todo: change name to summaries once data is ready
  currentSummaryIndex = 0;
  ngOnInit() {
    this.service.getNextBatch()
      .then(summaries => {
        this.summariesData = summaries;
        console.log(this.summariesData);
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
