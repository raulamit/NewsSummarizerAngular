import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-explorer',
  templateUrl: './summary-explorer.component.html',
  styleUrls: ['./summary-explorer.component.css']
})
export class SummaryExplorerComponent implements OnInit {

  constructor() { }
  summaries = [
    'summary 1',
    'summary 2'
    ];
  currentSummaryIndex = 0;
  ngOnInit() {
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
