import {JAVA_SERVER_URL} from '../constants';
import {Injectable} from '@angular/core';
import {Summary} from '../models/summary.model.client';

@Injectable()
export class CommentServiceClient {

  addComment(comment, rating, summaryId) {
    const review = {
      reviewText: comment,
      stars: rating
    }
    return fetch(JAVA_SERVER_URL + `/api/newssummary/${summaryId}/review`,
      {
        body: JSON.stringify(review),
        method: 'post',
        credentials: 'include', // include, same-origin, *omit
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => res.json());
  }
}
