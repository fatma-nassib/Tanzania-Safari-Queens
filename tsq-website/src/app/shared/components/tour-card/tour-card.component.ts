import { Component, Input } from '@angular/core';
import { Tour } from '../../../core/models/tour.model';
@Component({ selector:'app-tour-card', templateUrl:'./tour-card.component.html', styleUrls:['./tour-card.component.scss'] })
export class TourCardComponent { @Input() tour!: Tour; }
