import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  trackPageView(url: string) {
    if (typeof window !== 'undefined' && (window as any).gtag)
      (window as any).gtag('event','page_view',{ page_path: url });
  }
  trackEvent(name: string, params?: Record<string,any>) {
    if (typeof window !== 'undefined' && (window as any).gtag)
      (window as any).gtag('event', name, params);
  }
}
