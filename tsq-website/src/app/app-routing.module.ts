import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard }  from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  { path:'', loadChildren:()=>import('./features/home/home.module').then(m=>m.HomeModule) },
  { path:'about', loadChildren:()=>import('./features/about/about.module').then(m=>m.AboutModule) },
  { path:'destinations', loadChildren:()=>import('./features/destinations/destinations.module').then(m=>m.DestinationsModule) },
  { path:'tours', loadChildren:()=>import('./features/tours/tours.module').then(m=>m.ToursModule) },
  { path:'gallery', loadChildren:()=>import('./features/gallery/gallery.module').then(m=>m.GalleryModule) },
  { path:'contact', loadChildren:()=>import('./features/contact/contact.module').then(m=>m.ContactModule) },
  { path:'auth', loadChildren:()=>import('./features/auth/auth.module').then(m=>m.AuthModule) },
  { path:'booking', canActivate:[authGuard], loadChildren:()=>import('./features/booking/booking.module').then(m=>m.BookingModule) },
  { path:'admin', canActivate:[authGuard,adminGuard], loadChildren:()=>import('./features/admin/admin.module').then(m=>m.AdminModule) },
  { path:'404', loadComponent:()=>import('./features/not-found/not-found.component').then(m=>m.NotFoundComponent) },
  { path:'**', redirectTo:'/404' }
];

@NgModule({
  imports:[RouterModule.forRoot(routes,{
    scrollPositionRestoration:'top',
    anchorScrolling:'enabled',
    initialNavigation:'enabledBlocking'
  })],
  exports:[RouterModule]
})
export class AppRoutingModule {}
