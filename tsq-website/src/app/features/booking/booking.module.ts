import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingFlowComponent } from './pages/booking-flow.component';
import { BookingSuccessComponent } from './pages/booking-success.component';
@NgModule({ declarations:[BookingFlowComponent,BookingSuccessComponent], imports:[SharedModule,BookingRoutingModule] })
export class BookingModule {}
