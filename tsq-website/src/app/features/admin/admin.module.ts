import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent }       from './pages/dashboard.component';
import { BookingsComponent }        from './pages/bookings.component';
import { ToursManagementComponent } from './pages/tours-management.component';
@NgModule({ declarations:[DashboardComponent,BookingsComponent,ToursManagementComponent], imports:[SharedModule,AdminRoutingModule] })
export class AdminModule {}
