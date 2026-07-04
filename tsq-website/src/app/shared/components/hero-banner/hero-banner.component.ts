import { Component, Input } from '@angular/core';
@Component({ selector:'app-hero-banner', templateUrl:'./hero-banner.component.html', styleUrls:['./hero-banner.component.scss'] })
export class HeroBannerComponent {
  @Input() title = ''; @Input() subtitle = ''; @Input() eyebrow = '';
  @Input() imageUrl = ''; @Input() ctaLabel = 'Book Now'; @Input() ctaLink = '/booking';
  @Input() ctaLabel2 = ''; @Input() ctaLink2 = '';
  @Input() minHeight = '100vh'; @Input() overlayOpacity = 0.55;
}
