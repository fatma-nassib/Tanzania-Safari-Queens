import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({ selector:'img[lazyImg]' })
export class LazyImgDirective implements OnInit {
  constructor(private el: ElementRef<HTMLImageElement>) {}
  ngOnInit() { this.el.nativeElement.loading = 'lazy'; }
}
