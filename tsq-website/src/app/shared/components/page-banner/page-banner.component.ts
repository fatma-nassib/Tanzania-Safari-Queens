import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector:'app-page-banner',
  standalone:false,
  template:`
  <section class="pb" [style.background-image]="'url('+img+')'">
    <div class="pb__overlay"></div>
    <div class="pb__content">
      <span *ngIf="eyebrow" class="hero__eyebrow">{{eyebrow}}</span>
      <h1 class="pb__title">{{title}}</h1>
      <p *ngIf="subtitle" class="pb__sub">{{subtitle}}</p>
    </div>
  </section>`,
  styles:[`
    .pb{ position:relative;min-height:420px;display:flex;align-items:flex-end;justify-content:center;
      background-size:cover;background-position:center 30%;background-color:#3D2B1F; }
    .pb__overlay{ position:absolute;inset:0;
      background:linear-gradient(to top,rgba(28,18,10,.88) 0%,rgba(28,18,10,.25) 60%,rgba(28,18,10,.1) 100%); }
    .pb__content{ position:relative;z-index:2;text-align:center;padding:4rem 1.75rem 3.5rem;width:100%; }
    .hero__eyebrow{ display:inline-block;font-size:.7rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;
      color:#C8923A;margin-bottom:.75rem;font-family:'Jost',sans-serif; }
    .hero__eyebrow::before{ content:'- '; } .hero__eyebrow::after{ content:' -'; }
    .pb__title{ color:#fff;font-size:clamp(2.2rem,5vw,3.6rem);font-weight:700;
      font-family:'Cormorant Garamond',Georgia,serif;text-shadow:0 4px 20px rgba(0,0,0,.4);margin-bottom:.5rem; }
    .pb__sub{ color:rgba(255,255,255,.75);font-size:1rem;font-family:'Jost',sans-serif; }
  `]
})
export class PageBannerComponent {
  @Input() title=''; @Input() subtitle=''; @Input() eyebrow='';
  @Input() img='https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=80';
}
