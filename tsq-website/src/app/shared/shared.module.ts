import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NavbarComponent }         from './components/navbar/navbar.component';
import { FooterComponent }         from './components/footer/footer.component';
import { HeroBannerComponent }     from './components/hero-banner/hero-banner.component';
import { PageBannerComponent }     from './components/page-banner/page-banner.component';
import { TourCardComponent }       from './components/tour-card/tour-card.component';
import { DestinationCardComponent } from './components/destination-card/destination-card.component';
import { ReviewCardComponent }     from './components/review-card/review-card.component';
import { WhatsappBtnComponent }    from './components/whatsapp-btn/whatsapp-btn.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SafeUrlPipe }             from './pipes/safe-url.pipe';
import { StarsPipe }               from './pipes/stars.pipe';
import { ScrollRevealDirective }   from './directives/scroll-reveal.directive';
import { LazyImgDirective }        from './directives/lazy-img.directive';

const DECLARATIONS = [
  NavbarComponent, FooterComponent, HeroBannerComponent, PageBannerComponent,
  TourCardComponent, DestinationCardComponent, ReviewCardComponent,
  WhatsappBtnComponent, LoadingSpinnerComponent,
  SafeUrlPipe, StarsPipe, ScrollRevealDirective, LazyImgDirective,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  exports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, ...DECLARATIONS],
})
export class SharedModule {}
