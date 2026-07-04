import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TourService } from '../../../core/services/tour.service';
import { ReviewService } from '../../../core/services/review.service';
import { AuthService } from '../../../core/services/auth.service';
import { Tour } from '../../../core/models/tour.model';
import { Review } from '../../../core/models/review.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({ selector:'app-tour-detail', templateUrl:'./tour-detail.component.html', styleUrls:['./tour-detail.component.scss'] })
export class TourDetailComponent implements OnInit {
  tour: Tour | undefined;
  reviews: Review[] = [];
  activeImg = 0;
  user$ = this.auth.currentUser$;

  reviewForm = this.fb.group({
    rating: [5, [Validators.required, Validators.min(1), Validators.max(5)]],
    comment: ['', [Validators.required, Validators.minLength(10)]]
  });
  reviewSubmitting = false; reviewSuccess = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private tourService: TourService, private reviewService: ReviewService,
    private auth: AuthService, private fb: FormBuilder) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    this.tourService.getById(slug).subscribe(t => {
      if (!t) { this.router.navigate(['/tours']); return; }
      this.tour = t;
    });
  }

  submitReview() {
    if (this.reviewForm.invalid) return;
    this.reviewSubmitting = true;
    this.auth.currentUser$.subscribe(u => {
      if (!u || !this.tour) return;
      this.reviewService.add({ tourId:this.tour.id, userId:u.uid, userName:u.displayName||u.email||'Anonymous',
        rating:this.reviewForm.value.rating!, comment:this.reviewForm.value.comment! }).subscribe(() => {
          this.reviewSuccess = true; this.reviewSubmitting = false; this.reviewForm.reset({ rating:5 });
        });
    }).unsubscribe();
  }

  stars(n: number) { return n + '/5'; }
}
