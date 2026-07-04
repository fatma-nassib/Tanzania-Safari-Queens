import { Component } from '@angular/core';
import { LoadingState } from '../../../core/interceptors/loading.interceptor';
@Component({ selector:'app-loading-spinner', template:`
  <div class="spin-overlay" *ngIf="ls.isLoading$ | async">
    <div class="spin-ring"></div>
  </div>`,
  styles:[`.spin-overlay{position:fixed;inset:0;background:rgba(0,0,0,.35);display:grid;place-items:center;z-index:9999;}
    .spin-ring{width:52px;height:52px;border:4px solid rgba(255,255,255,.2);border-top-color:#C9A84C;border-radius:50%;animation:spin .8s linear infinite;}
    @keyframes spin{to{transform:rotate(360deg)}}`]
})
export class LoadingSpinnerComponent { constructor(public ls: LoadingState) {} }
