import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsListComponent } from './pages/destinations-list.component';
import { DestinationDetailComponent } from './pages/destination-detail.component';
const routes: Routes = [
  { path:'', component:DestinationsListComponent },
  { path:':slug', component:DestinationDetailComponent }
];
@NgModule({ imports:[RouterModule.forChild(routes)], exports:[RouterModule] })
export class DestinationsRoutingModule {}
