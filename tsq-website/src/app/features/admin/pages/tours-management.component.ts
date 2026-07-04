import { Component } from '@angular/core';
import { SEED_TOURS } from '../../../core/services/tour.service';
@Component({ selector:'app-tours-management', templateUrl:'./tours-management.component.html', styleUrls:['./admin.scss'] })
export class ToursManagementComponent { 
  tours = SEED_TOURS;
  getCheckIcon(): string {
    return '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
  }
}
