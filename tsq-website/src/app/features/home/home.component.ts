import { Component, OnInit } from '@angular/core';
import { TourService, SEED_TOURS } from '../../core/services/tour.service';
import { SeoService } from '../../core/services/seo.service';
import { Tour } from '../../core/models/tour.model';

@Component({ selector:'app-home', templateUrl:'./home.component.html', styleUrls:['./home.component.scss'] })
export class HomeComponent implements OnInit {
  featuredTours: Tour[] = [];

  // Real images from assets - African/Black people & Tanzania scenery
  destinations = [
    { slug:'serengeti',    name:'Serengeti',      country:'Tanzania',
      coverImage:'/assets/images/#safari #kenya #masaimara #lions #pictureinspo….jpeg',
      tagline:'Witness the Great Migration',   tourCount:8 },
    { slug:'zanzibar',     name:'Zanzibar',        country:'Tanzania',
      coverImage:'/assets/images/Mombasa Island.jpeg',
      tagline:'Pristine beaches & spice culture', tourCount:5 },
    { slug:'kilimanjaro',  name:'Kilimanjaro',     country:'Tanzania',
      coverImage:'/assets/images/Screenshot From 2026-09-21 11-36-47.png',
      tagline:'Conquer the Roof of Africa',    tourCount:4 },
    { slug:'ngorongoro',   name:'Ngorongoro',      country:'Tanzania',
      coverImage:'/assets/images/African Savannah.jpeg',
      tagline:'World\'s largest intact caldera', tourCount:6 },
    { slug:'magoroto',     name:'Magoroto',        country:'Tanzania',
      coverImage:'/assets/images/My favourite part about @therockzanzibar was….jpeg',
      tagline:'Hidden lakes & lush forest',    tourCount:3 },
    { slug:'nairobi',      name:'Nairobi',          country:'Kenya',
      coverImage:'/assets/images/Globalnista®_ BlackGirlTravel _ Exclusive Group Travel Club for Black Women.jpeg',
      tagline:'City safaris & vibrant culture', tourCount:4 },
  ];

  values = [
    { icon:'Fearless', title:'Fearlessness',   desc:'We embrace adventure and success with courage and confidence.' },
    { icon:'Sister', title:'Sisterhood',      desc:'We support, comfort, uplift, and celebrate one another.'     },
    { icon:'Inclusive', title:'Inclusivity',     desc:'Women of all races, cultures and backgrounds are welcome.'    },
    { icon:'Empower', title:'Empowerment',     desc:'Knowledge, resources and encouragement for women to thrive.' },
    { icon:'Explore', title:'Exploration',     desc:'Curiosity about the world, travel, cultures and oneself.'    },
    { icon:'Safe', title:'Safety',         desc:'Safe, responsible travel within a trusted community.'         },
  ];

  testimonials = [
    { name:'Amina Khatun',  photo:'/assets/images/398850110773908284.jpeg', text:'Tanzania Safari Queens changed my life. Five trips later and I\'m still counting. Every journey is more magical than the last!', location:'Dar es Salaam' },
    { name:'Grace Mwangi',  photo:'/assets/images/4222193395456247.jpeg', text:'The Serengeti safari was absolutely breathtaking. The organisation was flawless. I felt safe, empowered and celebrated.', location:'Nairobi' },
    { name:'Fatma Salim',   photo:'/assets/images/5136987069773130.jpeg', text:'Finally a community where women travel safely and boldly. TSQ is more than tours - it is a sisterhood for life.', location:'Zanzibar' },
  ];

  // Real African photo moments from assets for the "experience" grid
  moments = [
    { img:'/assets/images/#safari #kenya #masaimara #lions #pictureinspo….jpeg', label:'Serengeti Safari' },
    { img:'/assets/images/Island Gal 🌴.jpeg', label:'Zanzibar Beaches' },
    { img:'/assets/images/Screenshot From 2026-09-21 11-38-17.png', label:'Kilimanjaro Trek' },
    { img:'/assets/images/Globalnista®_ BlackGirlTravel _ Exclusive Group Travel Club for Black Women.jpeg', label:'Women\'s Sisterhood' },
    { img:'/assets/images/654288652142854768.jpeg', label:'Group Adventures' },
    { img:'/assets/images/effdeesea ✨.jpeg', label:'African Sunsets' },
  ];

  constructor(private tourService: TourService, private seo: SeoService) {}
  ngOnInit() {
    this.tourService.getFeatured(6).subscribe(t => this.featuredTours = t);
    this.seo.set({ title:'Tanzania Safari Queens - Women Travel & Investment Community', description:'A royal sisterhood of fearless women exploring Tanzania and the world.' });
  }
}
