import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationsListComponent } from './pages/destinations-list.component';
import { DestinationDetailComponent } from './pages/destination-detail.component';
@NgModule({ declarations:[DestinationsListComponent,DestinationDetailComponent], imports:[SharedModule,DestinationsRoutingModule] })
export class DestinationsModule {}
