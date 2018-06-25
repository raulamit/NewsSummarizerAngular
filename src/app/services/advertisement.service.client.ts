import {JAVA_SERVER_URL} from '../constants';
import {Injectable} from '@angular/core';
import {Advertisement} from '../models/advertise.model.client';

@Injectable()
export class AdvertisementServiceClient {

  // getNextBatch() {
  //   return fetch(JAVA_SERVER_URL + '/api/summary/batch/1')
  //     .then(response => response.json());
  // }

  saveAd(advertisement: Advertisement) {
    return fetch(JAVA_SERVER_URL + '/api/advertisement',
      {
        body: JSON.stringify(advertisement),
        method: 'post',
        credentials: 'include', // include, same-origin, *omit
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => res.json());
  }
}
