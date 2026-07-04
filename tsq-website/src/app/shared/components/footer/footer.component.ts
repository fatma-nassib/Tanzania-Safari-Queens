import { Component } from '@angular/core';
@Component({ selector:'app-footer', templateUrl:'./footer.component.html', styleUrls:['./footer.component.scss'] })
export class FooterComponent {
  year = new Date().getFullYear();
  phones = ['+255 763 983 920','+255 745 695 215','+255 693 124 340'];
  email  = 'tanzaniasafariqueen@gmail.com';
  quickLinks = [{l:'Destinations',p:'/destinations'},{l:'Tours',p:'/tours'},{l:'Gallery',p:'/gallery'},{l:'About Us',p:'/about'},{l:'Contact',p:'/contact'}];
  bookLinks  = [{l:'Book a Tour',p:'/booking'},{l:'My Account',p:'/auth/login'},{l:'Admin Panel',p:'/admin'}];

  cleanPhone(phone: string): string {
    return phone.replace(/\s/g, '');
  }
}
