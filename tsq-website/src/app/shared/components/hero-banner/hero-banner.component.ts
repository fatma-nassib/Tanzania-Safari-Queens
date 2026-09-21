import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector:'app-hero-banner',
  templateUrl:'./hero-banner.component.html',
  styleUrls:['./hero-banner.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HeroBannerComponent implements OnInit, OnDestroy {
  @Input() title = ''; 
  @Input() subtitle = ''; 
  @Input() eyebrow = '';
  @Input() imageUrl = '';
  @Input() imageUrls: string[] = [];
  @Input() ctaLabel = 'Book Now'; 
  @Input() ctaLink = '/booking';
  @Input() ctaLabel2 = ''; 
  @Input() ctaLink2 = '';
  @Input() minHeight = '100vh'; 
  @Input() overlayOpacity = 0.55;
  @Input() interval = 5000; // Change image every 5 seconds

  currentImageIndex = 0;
  private intervalId: any;

  ngOnInit() {
    // If imageUrls array is provided, use it; otherwise fall back to single imageUrl
    if (this.imageUrls && this.imageUrls.length > 0) {
      this.startImageRotation();
    }
  }

  ngOnDestroy() {
    this.stopImageRotation();
  }

  private startImageRotation() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
    }, this.interval);
  }

  private stopImageRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  get currentImage(): string {
    return this.imageUrls && this.imageUrls.length > 0 
      ? this.imageUrls[this.currentImageIndex] 
      : this.imageUrl;
  }
}
