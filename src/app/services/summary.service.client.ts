import {JAVA_SERVER_URL} from '../constants';
import {Injectable} from '@angular/core';
import {Summary} from '../models/summary.model.client';

@Injectable()
export class SummaryServiceClient {

  getNextBatch() {
    return fetch(JAVA_SERVER_URL + '/api/summary/batch/1')
      .then(response => response.json());
  }

  saveNewsSummary(summary: Summary) {
    return fetch(JAVA_SERVER_URL + `/api/newssummary`,
      {
        body: JSON.stringify(summary),
        method: 'post',
        credentials: 'include', // include, same-origin, *omit
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => res.json());
  }
}
