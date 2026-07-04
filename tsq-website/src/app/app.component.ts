import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SeoService } from './core/services/seo.service';
import { AnalyticsService } from './core/services/analytics.service';

@Component({
  selector:'app-root',
  template:`
    <app-loading-spinner></app-loading-spinner>
    <app-navbar></app-navbar>
    <main><router-outlet></router-outlet></main>
    <app-footer></app-footer>
    <app-whatsapp-btn></app-whatsapp-btn>
  `
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private seo: SeoService, private analytics: AnalyticsService) {}
  ngOnInit() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e:any) => {
      this.analytics.trackPageView(e.urlAfterRedirects);
    });
    this.seo.set({ title:'Tanzania Safari Queens - Women Travel & Investment Community', description:'A royal sisterhood of fearless women exploring Tanzania and the world.' });
  }
}
