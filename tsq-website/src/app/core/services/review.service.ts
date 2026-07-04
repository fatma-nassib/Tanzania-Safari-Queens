import { Injectable } from '@angular/core';
import {
  Firestore, collection, collectionData, addDoc,
  query, where, orderBy, Timestamp
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Review } from '../models/review.model';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private col = collection(this.firestore, 'reviews');

  constructor(private firestore: Firestore) {}

  getForTour(tourId: string): Observable<Review[]> {
    return collectionData(
      query(this.col, where('tourId', '==', tourId), orderBy('createdAt', 'desc')),
      { idField: 'id' }
    ) as Observable<Review[]>;
  }

  add(review: Omit<Review, 'id' | 'createdAt'>) {
    return from(addDoc(this.col, { ...review, createdAt: Timestamp.now() }));
  }
}
