import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TourService, SEED_TOURS } from '../../../core/services/tour.service';
import { BookingService } from '../../../core/services/booking.service';
import { AuthService } from '../../../core/services/auth.service';
import { Tour } from '../../../core/models/tour.model';

@Component({ selector:'app-booking-flow', templateUrl:'./booking-flow.component.html', styleUrls:['./booking-flow.component.scss'] })
export class BookingFlowComponent implements OnInit {
  step = 1;
  today = new Date().toISOString().split('T')[0]; // min date for date picker
  tour: Tour | undefined;
  tours: Tour[] = [];
  user$ = this.auth.currentUser$;

  step1Form!: FormGroup;  // Select tour + date + travelers
  step2Form!: FormGroup;  // Lead traveler details
  step3Form!: FormGroup;  // Payment

  submitting = false;
  error = '';

  paymentMethods = [
    { value:'mpesa',        label:'M-Pesa (Vodacom)', icon:'Mobile' },
    { value:'airtel',       label:'Airtel Money',     icon:'Mobile' },
    { value:'card',         label:'Credit / Debit Card', icon:'Card' },
    { value:'bank-transfer',label:'Bank Transfer',    icon:'Bank' },
  ];

  constructor(
    private fb: FormBuilder, private route: ActivatedRoute, private router: Router,
    private tourService: TourService, private bookingService: BookingService, private auth: AuthService) {}

  ngOnInit() {
    this.tourService.getAll().subscribe(t => this.tours = t.filter(t => t.active));

    const tourId = this.route.snapshot.queryParamMap.get('tourId');
    if (tourId) this.tourService.getById(tourId).subscribe(t => this.tour = t);

    this.step1Form = this.fb.group({
      tourId:    [tourId || '', Validators.required],
      tourDate:  ['', Validators.required],
      travelers: [1, [Validators.required, Validators.min(1), Validators.max(20)]]
    });

    this.step2Form = this.fb.group({
      firstName:   ['', Validators.required],
      lastName:    ['', Validators.required],
      email:       ['', [Validators.required, Validators.email]],
      phone:       ['', Validators.required],
      nationality: ['', Validators.required],
      pickup:      [''],
      dietary:     [''],
      special:     ['']
    });

    this.step3Form = this.fb.group({
      paymentMethod: ['mpesa', Validators.required],
      mpesaPhone:    [''],
      cardNumber:    [''],
      cardExpiry:    [''],
      cardCvv:       [''],
      agreeTerms:    [false, Validators.requiredTrue]
    });

    this.step1Form.get('tourId')?.valueChanges.subscribe(id => {
      this.tour = this.tours.find(t => t.id === id);
    });
  }

  get totalAmount(): number {
    if (!this.tour) return 0;
    return this.tour.price.amount * (this.step1Form.get('travelers')?.value || 1);
  }

  get selectedPayment() { return this.step3Form.get('paymentMethod')?.value; }

  next() {
    if (this.step === 1 && this.step1Form.valid) this.step = 2;
    else if (this.step === 2 && this.step2Form.valid) this.step = 3;
  }
  back() { if (this.step > 1) this.step--; }

  submit() {
    if (this.step3Form.invalid) return;
    this.submitting = true; this.error = '';
    this.auth.currentUser$.subscribe(u => {
      if (!u || !this.tour) { this.error = 'Please sign in to complete booking.'; this.submitting = false; return; }
      const s1 = this.step1Form.value; const s2 = this.step2Form.value;
      this.bookingService.create({
        userId: u.uid, tourId: this.tour.id, tourTitle: this.tour.title,
        tourDate: new Date(s1.tourDate),
        travelers: [{ firstName:s2.firstName, lastName:s2.lastName, email:s2.email, phone:s2.phone, nationality:s2.nationality, dietary:s2.dietary }],
        totalAmount: this.totalAmount, currency: this.tour.price.currency,
        paymentMethod: this.step3Form.value.paymentMethod,
        pickupLocation: s2.pickup, specialRequests: s2.special
      }).subscribe({
        next: () => { this.submitting = false; this.router.navigate(['/booking/success']); },
        error: (e: any) => { this.error = 'Booking failed. Please try again.'; this.submitting = false; }
      });
    }).unsubscribe();
  }
}
