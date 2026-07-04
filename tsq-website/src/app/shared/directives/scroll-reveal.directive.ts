import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector:'[scrollReveal]' })
export class ScrollRevealDirective implements OnInit {
  // Accept delay directly via the attribute: [scrollReveal]="100"
  @Input() scrollReveal: number = 0;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const e = this.el.nativeElement;
    const delay = this.scrollReveal ?? 0;
    e.style.cssText += `opacity:0;transform:translateY(28px);
      transition:opacity .6s ease ${delay}ms,transform .6s ease ${delay}ms`;

    if (typeof IntersectionObserver === 'undefined') {
      e.style.opacity = '1'; e.style.transform = 'none'; return;
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        e.style.opacity = '1'; e.style.transform = 'none'; obs.disconnect();
      }
    }, { threshold: 0.12 });
    obs.observe(e);
  }
}
