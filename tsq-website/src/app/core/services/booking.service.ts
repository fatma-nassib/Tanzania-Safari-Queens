import { Injectable } from '@angular/core';
import {
  Firestore, collection, collectionData, addDoc,
  doc, updateDoc, query, where, orderBy, Timestamp
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Booking, BookingStatus } from '../models/booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private col = collection(this.firestore, 'bookings');

  constructor(private firestore: Firestore) {}

  create(booking: Omit<Booking, 'id' | 'bookingRef' | 'createdAt' | 'updatedAt' | 'status'>) {
    const ref = `TSQ-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    return from(addDoc(this.col, {
      ...booking,
      bookingRef: ref,
      status: 'pending',
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    }));
  }

  getUserBookings(userId: string): Observable<Booking[]> {
    return collectionData(
      query(this.col, where('userId', '==', userId), orderBy('createdAt', 'desc')),
      { idField: 'id' }
    ) as Observable<Booking[]>;
  }

  getAllBookings(): Observable<Booking[]> {
    return collectionData(
      query(this.col, orderBy('createdAt', 'desc')),
      { idField: 'id' }
    ) as Observable<Booking[]>;
  }

  updateStatus(id: string, status: BookingStatus) {
    return from(updateDoc(doc(this.firestore, 'bookings', id), {
      status, updatedAt: Timestamp.now()
    }));
  }
}
