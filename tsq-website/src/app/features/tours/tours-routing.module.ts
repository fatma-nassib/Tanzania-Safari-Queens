import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToursListComponent } from './pages/tours-list.component';
import { TourDetailComponent } from './pages/tour-detail.component';
const routes: Routes = [
  { path:'', component:ToursListComponent },
  { path:':slug', component:TourDetailComponent }
];
@NgModule({ imports:[RouterModule.forChild(routes)], exports:[RouterModule] })
export class ToursRoutingModule {}
