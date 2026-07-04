import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({ selector:'app-navbar', templateUrl:'./navbar.component.html', styleUrls:['./navbar.component.scss'] })
export class NavbarComponent {
  scrolled = false; menuOpen = false;
  user$ = this.auth.currentUser$;
  links = [
    {label:'Home',path:'/'},{label:'About',path:'/about'},
    {label:'Destinations',path:'/destinations'},{label:'Tours',path:'/tours'},
    {label:'Gallery',path:'/gallery'},{label:'Contact',path:'/contact'}
  ];
  constructor(private auth: AuthService, private router: Router) {}
  @HostListener('window:scroll') onScroll() { this.scrolled = window.scrollY > 60; }
  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu()  { this.menuOpen = false; }
  logout() { this.auth.logout().subscribe(() => { this.router.navigate(['/']); this.closeMenu(); }); }
}
