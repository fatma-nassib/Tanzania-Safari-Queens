import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../../core/services/booking.service';
import { Booking } from '../../../core/models/booking.model';
@Component({ selector:'app-dashboard', templateUrl:'./dashboard.component.html', styleUrls:['./admin.scss'] })
export class DashboardComponent implements OnInit {
  bookings: Booking[] = [];
  stats = { total:0, pending:0, confirmed:0, revenue:0 };
  constructor(private bookingService: BookingService) {}
  ngOnInit() {
    this.bookingService.getAllBookings().subscribe(b => {
      this.bookings = b;
      this.stats = {
        total:     b.length,
        pending:   b.filter(x => x.status === 'pending').length,
        confirmed: b.filter(x => x.status === 'confirmed' || x.status === 'paid').length,
        revenue:   b.filter(x => x.status === 'paid').reduce((s,x) => s + x.totalAmount, 0)
      };
    });
  }
}
