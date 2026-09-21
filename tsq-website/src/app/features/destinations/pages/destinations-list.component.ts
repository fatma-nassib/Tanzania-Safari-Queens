import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../../core/services/seo.service';

@Component({ selector:'app-destinations-list', templateUrl:'./destinations-list.component.html', styleUrls:['./destinations-list.component.scss'] })
export class DestinationsListComponent implements OnInit {
  activeRegion = 'all';
  regions = [
    { label:'All', value:'all' },
    { label:'Tanzania', value:'tanzania' },
    { label:'East & South Africa', value:'africa' },
    { label:'International', value:'international' }
  ];

  all = [
    // Tanzania
    { slug:'serengeti',    name:'Serengeti',      country:'Tanzania', region:'tanzania',      coverImage:'/assets/images/serengeti-1.jpg',   tagline:'Witness the Great Migration',         tourCount:8,  highlights:['Big Five','Great Migration','Endless Plains'] },
    { slug:'zanzibar',     name:'Zanzibar',        country:'Tanzania', region:'tanzania',      coverImage:'/assets/images/zanzibar-1.jpg',    tagline:'Pristine beaches & spice culture',     tourCount:5,  highlights:['White Sand Beaches','Stone Town','Snorkeling'] },
    { slug:'kilimanjaro',  name:'Mt. Kilimanjaro', country:'Tanzania', region:'tanzania',      coverImage:'/assets/images/kili-1.jpg',        tagline:'Roof of Africa at 5,895m',             tourCount:4,  highlights:['Summit Trek','Glaciers','Marangu Route'] },
    { slug:'ngorongoro',   name:'Ngorongoro',      country:'Tanzania', region:'tanzania',      coverImage:'/assets/images/ngorongoro-1.jpg',  tagline:'World\'s largest intact caldera',      tourCount:6,  highlights:['Black Rhino','Big Five','Crater Floor'] },
    { slug:'magoroto',     name:'Magoroto',        country:'Tanzania', region:'tanzania',      coverImage:'/assets/images/magoroto-1.jpg',    tagline:'Hidden lakes & lush forest',           tourCount:3,  highlights:['Kayaking','Zip-line','Forest Hike'] },
    { slug:'mikumi',       name:'Mikumi',          country:'Tanzania', region:'tanzania',      coverImage:'/assets/images/mikumi-1.jpg',      tagline:'Tanzania\'s accessible safari park',   tourCount:4,  highlights:['Game Drives','Hippo Pools','Bird Watching'] },
    { slug:'arusha',       name:'Arusha',          country:'Tanzania', region:'tanzania',      coverImage:'/assets/images/arusha-1.jpg',      tagline:'Gateway to Northern Circuit',          tourCount:5,  highlights:['Cultural Tours','Coffee Farms','Mt Meru'] },
    { slug:'saadani',      name:'Saadani',         country:'Tanzania', region:'tanzania',      coverImage:'/assets/images/saadani-1.jpg',     tagline:'Where the bush meets the beach',       tourCount:2,  highlights:['Beach Safari','Boat Safaris','Bird Life'] },
    // East & South Africa
    { slug:'nairobi',      name:'Nairobi',         country:'Kenya',    region:'africa',        coverImage:'/assets/images/nairobi-1.jpg',    tagline:'City safaris & vibrant culture',        tourCount:4,  highlights:['Giraffe Centre','Nairobi NP','Karura Forest'] },
    { slug:'mombasa',      name:'Mombasa',         country:'Kenya',    region:'africa',        coverImage:'/assets/images/mombasa-1.jpg',    tagline:'Ancient Swahili coast & beaches',       tourCount:3,  highlights:['Diani Beach','Fort Jesus','Water Sports'] },
    { slug:'zambia',       name:'Victoria Falls',  country:'Zambia',   region:'africa',        coverImage:'/assets/images/zambia-1.jpg',     tagline:'The Smoke That Thunders',               tourCount:2,  highlights:['Victoria Falls','Bungee Jump','River Safari'] },
    { slug:'south-africa', name:'Cape Town',       country:'South Africa', region:'africa',    coverImage:'/assets/images/capetown-1.jpg',  tagline:'Table Mountain & vibrant city life',    tourCount:3,  highlights:['Table Mountain','Winelands','Cape of Good Hope'] },
    // International
    { slug:'dubai',        name:'Dubai',           country:'UAE',      region:'international', coverImage:'/assets/images/dubai-1.jpg',      tagline:'Luxury, deserts & futuristic skyline', tourCount:3,  highlights:['Desert Safari','Burj Khalifa','Dubai Mall'] },
    { slug:'bali',         name:'Bali',            country:'Indonesia', region:'international', coverImage:'/assets/images/bali-1.jpg',      tagline:'Island of Gods, temples & rice fields',tourCount:2,  highlights:['Temples','Rice Terraces','Surfing'] },
    { slug:'europe',       name:'Europe Tour',     country:'Europe',   region:'international', coverImage:'/assets/images/europe-1.jpg',     tagline:'Classic cities & alpine landscapes',   tourCount:2,  highlights:['Paris','Rome','Swiss Alps'] },
    { slug:'china',        name:'China',           country:'China',    region:'international', coverImage:'/assets/images/china-1.jpg',      tagline:'Ancient wonders & modern megacities',  tourCount:1,  highlights:['Great Wall','Forbidden City','Shanghai'] },
  ];

  get filtered() {
    return this.activeRegion === 'all' ? this.all : this.all.filter(d => d.region === this.activeRegion);
  }

  constructor(private seo: SeoService) {}
  ngOnInit() {
    this.seo.set({ title:'Destinations | Tanzania Safari Queens', description:'Explore Tanzania, East Africa and the world with Tanzania Safari Queens.' });
  }
}
