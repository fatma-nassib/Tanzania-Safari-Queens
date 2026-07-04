import { Component, Input } from '@angular/core';
import { Review } from '../../../core/models/review.model';
@Component({ selector:'app-review-card', template:`
  <div class="rcard">
    <div class="rcard__header">
      <div class="rcard__avatar">{{review.userName?.charAt(0)|uppercase}}</div>
      <div><strong class="rcard__name">{{review.userName}}</strong>
        <div class="rcard__stars">{{'★'.repeat(review.rating)}}{{'☆'.repeat(5-review.rating)}}</div>
      </div>
    </div>
    <p class="rcard__comment">{{review.comment}}</p>
  </div>`,
  styles:[`.rcard{background:#fff;border-radius:12px;padding:1.25rem;box-shadow:0 2px 12px rgba(0,0,0,.07);}
    .rcard__header{display:flex;gap:.75rem;align-items:center;margin-bottom:.75rem;}
    .rcard__avatar{width:42px;height:42px;border-radius:50%;background:#0B2D67;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.1rem;flex-shrink:0;}
    .rcard__name{font-weight:600;color:#1A1A2E;font-size:.9rem;}
    .rcard__stars{color:#C9A84C;font-size:.85rem;letter-spacing:.05em;}
    .rcard__comment{color:#3D3D52;font-size:.9rem;line-height:1.6;font-style:italic;}`]
})
export class ReviewCardComponent { @Input() review!: Review; }
