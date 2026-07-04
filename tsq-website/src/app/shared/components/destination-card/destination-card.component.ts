import { Component, Input } from '@angular/core';
import { Destination } from '../../../core/models/destination.model';
@Component({ selector:'app-destination-card', templateUrl:'./destination-card.component.html', styleUrls:['./destination-card.component.scss'] })
export class DestinationCardComponent { @Input() destination: any; }
