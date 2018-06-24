import {JAVA_SERVER_URL} from '../constants';
import {Injectable} from '@angular/core';

@Injectable()
export class SummaryServiceClient {

  getNextBatch() {
    return fetch(JAVA_SERVER_URL + '/api/summary/batch/1')
      .then(response => response.json());
  }
}
