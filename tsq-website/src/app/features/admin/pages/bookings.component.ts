import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../../core/services/booking.service';
import { Booking, BookingStatus } from '../../../core/models/booking.model';
@Component({ selector:'app-bookings', templateUrl:'./bookings.component.html', styleUrls:['./admin.scss'] })
export class BookingsComponent implements OnInit {
  bookings: Booking[] = []; filtered: Booking[] = [];
  statusFilter: BookingStatus | 'all' = 'all';
  statuses: (BookingStatus|'all')[] = ['all','pending','confirmed','paid','cancelled','completed'];
  constructor(private bookingService: BookingService) {}
  ngOnInit() { this.bookingService.getAllBookings().subscribe(b => { this.bookings = b; this.filter(); }); }
  filter() { this.filtered = this.statusFilter === 'all' ? this.bookings : this.bookings.filter(b => b.status === this.statusFilter); }
  updateStatus(b: Booking, s: BookingStatus) { this.bookingService.updateStatus(b.id, s).subscribe(); }
}
