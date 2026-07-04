import { Component, OnInit } from '@angular/core';
import { TourService, SEED_TOURS } from '../../core/services/tour.service';
import { SeoService } from '../../core/services/seo.service';
import { Tour } from '../../core/models/tour.model';

@Component({ selector:'app-home', templateUrl:'./home.component.html', styleUrls:['./home.component.scss'] })
export class HomeComponent implements OnInit {
  featuredTours: Tour[] = [];

  // Real Unsplash images - African/Black people & Tanzania scenery
  destinations = [
    { slug:'serengeti',    name:'Serengeti',      country:'Tanzania',
      coverImage:'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=700&q=85',
      tagline:'Witness the Great Migration',   tourCount:8 },
    { slug:'zanzibar',     name:'Zanzibar',        country:'Tanzania',
      coverImage:'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=700&q=85',
      tagline:'Pristine beaches & spice culture', tourCount:5 },
    { slug:'kilimanjaro',  name:'Kilimanjaro',     country:'Tanzania',
      coverImage:'https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=700&q=85',
      tagline:'Conquer the Roof of Africa',    tourCount:4 },
    { slug:'ngorongoro',   name:'Ngorongoro',      country:'Tanzania',
      coverImage:'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=700&q=85',
      tagline:'World\'s largest intact caldera', tourCount:6 },
    { slug:'magoroto',     name:'Magoroto',        country:'Tanzania',
      coverImage:'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&q=85',
      tagline:'Hidden lakes & lush forest',    tourCount:3 },
    { slug:'nairobi',      name:'Nairobi',          country:'Kenya',
      coverImage:'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=700&q=85',
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
    { name:'Amina Khatun',  photo:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&q=80', text:'Tanzania Safari Queens changed my life. Five trips later and I\'m still counting. Every journey is more magical than the last!', location:'Dar es Salaam' },
    { name:'Grace Mwangi',  photo:'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=120&q=80', text:'The Serengeti safari was absolutely breathtaking. The organisation was flawless. I felt safe, empowered and celebrated.', location:'Nairobi' },
    { name:'Fatma Salim',   photo:'https://images.unsplash.com/photo-1596993100471-c3905dafa78e?w=120&q=80', text:'Finally a community where women travel safely and boldly. TSQ is more than tours - it is a sisterhood for life.', location:'Zanzibar' },
  ];

  // Real African photo moments for the "experience" grid
  moments = [
    { img:'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80', label:'Serengeti Safari' },
    { img:'https://images.unsplash.com/photo-1612296727716-d7b8e2b53f87?w=600&q=80', label:'Zanzibar Beaches' },
    { img:'https://images.unsplash.com/photo-1589483232748-515c025575bc?w=600&q=80', label:'Kilimanjaro Trek' },
    { img:'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?w=600&q=80', label:'Women\'s Sisterhood' },
    { img:'https://images.unsplash.com/photo-1562832135-14a35d25edef?w=600&q=80', label:'Group Adventures' },
    { img:'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=600&q=80', label:'African Sunsets' },
  ];

  constructor(private tourService: TourService, private seo: SeoService) {}
  ngOnInit() {
    this.tourService.getFeatured(6).subscribe(t => this.featuredTours = t);
    this.seo.set({ title:'Tanzania Safari Queens - Women Travel & Investment Community', description:'A royal sisterhood of fearless women exploring Tanzania and the world.' });
  }
}
