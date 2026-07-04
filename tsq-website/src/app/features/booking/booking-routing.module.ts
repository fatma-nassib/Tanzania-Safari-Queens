import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFlowComponent } from './pages/booking-flow.component';
import { BookingSuccessComponent } from './pages/booking-success.component';
const routes: Routes = [
  { path:'', component:BookingFlowComponent },
  { path:'success', component:BookingSuccessComponent }
];
@NgModule({ imports:[RouterModule.forChild(routes)], exports:[RouterModule] })
export class BookingRoutingModule {}
