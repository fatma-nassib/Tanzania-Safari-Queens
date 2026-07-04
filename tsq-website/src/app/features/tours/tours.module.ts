import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ToursRoutingModule } from './tours-routing.module';
import { ToursListComponent } from './pages/tours-list.component';
import { TourDetailComponent } from './pages/tour-detail.component';
@NgModule({ declarations:[ToursListComponent,TourDetailComponent], imports:[SharedModule,ToursRoutingModule] })
export class ToursModule {}
