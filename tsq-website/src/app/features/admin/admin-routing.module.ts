import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }          from './pages/dashboard.component';
import { BookingsComponent }           from './pages/bookings.component';
import { ToursManagementComponent }    from './pages/tours-management.component';
const routes: Routes = [
  { path:'',         component:DashboardComponent       },
  { path:'bookings', component:BookingsComponent        },
  { path:'tours',    component:ToursManagementComponent }
];
@NgModule({ imports:[RouterModule.forChild(routes)], exports:[RouterModule] })
export class AdminRoutingModule {}
