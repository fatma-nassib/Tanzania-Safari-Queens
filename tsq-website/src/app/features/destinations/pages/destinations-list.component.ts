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
    { slug:'serengeti',    name:'Serengeti',      country:'Tanzania', region:'tanzania',      coverImage:'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=700&q=85',   tagline:'Witness the Great Migration',         tourCount:8,  highlights:['Big Five','Great Migration','Endless Plains'] },
    { slug:'zanzibar',     name:'Zanzibar',        country:'Tanzania', region:'tanzania',      coverImage:'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=700&q=85',    tagline:'Pristine beaches & spice culture',     tourCount:5,  highlights:['White Sand Beaches','Stone Town','Snorkeling'] },
    { slug:'kilimanjaro',  name:'Mt. Kilimanjaro', country:'Tanzania', region:'tanzania',      coverImage:'https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=700&q=85',        tagline:'Roof of Africa at 5,895m',             tourCount:4,  highlights:['Summit Trek','Glaciers','Marangu Route'] },
    { slug:'ngorongoro',   name:'Ngorongoro',      country:'Tanzania', region:'tanzania',      coverImage:'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=700&q=85',  tagline:'World\'s largest intact caldera',      tourCount:6,  highlights:['Black Rhino','Big Five','Crater Floor'] },
    { slug:'magoroto',     name:'Magoroto',        country:'Tanzania', region:'tanzania',      coverImage:'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&q=85',    tagline:'Hidden lakes & lush forest',           tourCount:3,  highlights:['Kayaking','Zip-line','Forest Hike'] },
    { slug:'mikumi',       name:'Mikumi',          country:'Tanzania', region:'tanzania',      coverImage:'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=700&q=85',      tagline:'Tanzania\'s accessible safari park',   tourCount:4,  highlights:['Game Drives','Hippo Pools','Bird Watching'] },
    { slug:'arusha',       name:'Arusha',          country:'Tanzania', region:'tanzania',      coverImage:'https://images.unsplash.com/photo-1612296727716-d7b8e2b53f87?w=700&q=85',      tagline:'Gateway to Northern Circuit',          tourCount:5,  highlights:['Cultural Tours','Coffee Farms','Mt Meru'] },
    { slug:'saadani',      name:'Saadani',         country:'Tanzania', region:'tanzania',      coverImage:'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=700&q=85',     tagline:'Where the bush meets the beach',       tourCount:2,  highlights:['Beach Safari','Boat Safaris','Bird Life'] },
    // East & South Africa
    { slug:'nairobi',      name:'Nairobi',         country:'Kenya',    region:'africa',        coverImage:'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=700&q=85',    tagline:'City safaris & vibrant culture',        tourCount:4,  highlights:['Giraffe Centre','Nairobi NP','Karura Forest'] },
    { slug:'mombasa',      name:'Mombasa',         country:'Kenya',    region:'africa',        coverImage:'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=700&q=85',    tagline:'Ancient Swahili coast & beaches',       tourCount:3,  highlights:['Diani Beach','Fort Jesus','Water Sports'] },
    { slug:'zambia',       name:'Victoria Falls',  country:'Zambia',   region:'africa',        coverImage:'https://images.unsplash.com/photo-1562832135-14a35d25edef?w=700&q=85',     tagline:'The Smoke That Thunders',               tourCount:2,  highlights:['Victoria Falls','Bungee Jump','River Safari'] },
    { slug:'south-africa', name:'Cape Town',       country:'South Africa', region:'africa',    coverImage:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=700&q=85',  tagline:'Table Mountain & vibrant city life',    tourCount:3,  highlights:['Table Mountain','Winelands','Cape of Good Hope'] },
    // International
    { slug:'dubai',        name:'Dubai',           country:'UAE',      region:'international', coverImage:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&q=85',      tagline:'Luxury, deserts & futuristic skyline', tourCount:3,  highlights:['Desert Safari','Burj Khalifa','Dubai Mall'] },
    { slug:'bali',         name:'Bali',            country:'Indonesia', region:'international', coverImage:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&q=85',      tagline:'Island of Gods, temples & rice fields',tourCount:2,  highlights:['Temples','Rice Terraces','Surfing'] },
    { slug:'europe',       name:'Europe Tour',     country:'Europe',   region:'international', coverImage:'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=700&q=85',     tagline:'Classic cities & alpine landscapes',   tourCount:2,  highlights:['Paris','Rome','Swiss Alps'] },
    { slug:'china',        name:'China',           country:'China',    region:'international', coverImage:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=700&q=85',      tagline:'Ancient wonders & modern megacities',  tourCount:1,  highlights:['Great Wall','Forbidden City','Shanghai'] },
  ];

  get filtered() {
    return this.activeRegion === 'all' ? this.all : this.all.filter(d => d.region === this.activeRegion);
  }

  constructor(private seo: SeoService) {}
  ngOnInit() {
    this.seo.set({ title:'Destinations | Tanzania Safari Queens', description:'Explore Tanzania, East Africa and the world with Tanzania Safari Queens.' });
  }
}
