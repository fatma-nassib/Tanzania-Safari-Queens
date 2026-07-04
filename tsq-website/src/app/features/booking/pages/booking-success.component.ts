import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({ selector:'app-booking-success', template:`
<div class="page-content">
  <div class="success-page">
    <div class="success-card">
      <div class="success-card__icon">✓</div>
      <h2>Booking Confirmed!</h2>
      <p>Thank you for booking with Tanzania Safari Queens. You will receive a confirmation email shortly with your booking reference and itinerary details.</p>
      <p style="color:#7A7A95;font-size:.9rem">Check your email (including spam folder). Our team will contact you within 24 hours to confirm your booking and arrange payment.</p>
      <div class="success-card__actions">
        <a routerLink="/tours" class="btn btn--gold btn--lg">Explore More Tours</a>
        <a routerLink="/" class="btn btn--outline btn--lg">Back to Home</a>
      </div>
    </div>
  </div>
</div>`,
  styles:[`
    .success-page{min-height:80vh;display:flex;align-items:center;justify-content:center;padding:4rem 1.5rem;}
    .success-card{background:#FAF6EF;border-radius:16px;padding:3rem 2.5rem;text-align:center;max-width:560px;box-shadow:0 12px 40px rgba(0,0,0,.12);}
    .success-card__icon{font-size:4rem;margin-bottom:1rem;}
    h2{margin-bottom:1rem;}
    p{color:#3D3D52;line-height:1.7;margin-bottom:.75rem;}
    .success-card__actions{display:flex;gap:1rem;justify-content:center;margin-top:2rem;flex-wrap:wrap;}
  `]
})
export class BookingSuccessComponent {}
