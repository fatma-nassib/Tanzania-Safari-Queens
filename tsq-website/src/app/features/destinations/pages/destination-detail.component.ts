import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TourService, SEED_TOURS } from '../../../core/services/tour.service';
import { Tour } from '../../../core/models/tour.model';

@Component({ selector:'app-destination-detail', templateUrl:'./destination-detail.component.html', styleUrls:['./destination-detail.component.scss'] })
export class DestinationDetailComponent implements OnInit {
  slug = '';
  tours: Tour[] = [];
  destMap: Record<string, any> = {
    serengeti: { name:'Serengeti', country:'Tanzania', img:'/assets/images/#safari #kenya #masaimara #lions #pictureinspo….jpeg', desc:'The Serengeti is Tanzania\'s most famous national park, covering 14,750 sq km of endless savannah. Home to the Big Five and the world-famous annual wildebeest migration.', highlights:['Big Five wildlife','Great Migration','Endless savannah','Balloon safaris'], bestTime:'June–October for migration; January–March for calving' },
    zanzibar:  { name:'Zanzibar',  country:'Tanzania', img:'/assets/images/Mombasa Island.jpeg',  desc:'An archipelago of islands off Tanzania\'s coast offering stunning white-sand beaches, crystal clear waters, and a rich Swahili culture. Stone Town is a UNESCO World Heritage Site.', highlights:['Pristine beaches','Stone Town UNESCO Site','Spice farms','Snorkeling & diving'], bestTime:'June–October (dry season)' },
    kilimanjaro: { name:'Mt. Kilimanjaro', country:'Tanzania', img:'/assets/images/Screenshot From 2026-09-21 11-36-47.png', desc:'Africa\'s highest peak at 5,895m. The iconic snow-capped mountain offers multiple trekking routes for adventurous women to conquer the Roof of Africa.', highlights:['Uhuru Peak (5,895m)','Multiple routes','Unique ecosystems','Certificate of achievement'], bestTime:'January–March & June–October' },
    ngorongoro:{ name:'Ngorongoro', country:'Tanzania', img:'/assets/images/African Savannah.jpeg', desc:'The Ngorongoro Crater is the world\'s largest inactive volcanic caldera, home to 25,000+ animals including the rare black rhino. A natural enclosure that offers extraordinary game viewing.', highlights:['Black Rhino sightings','25,000+ animals','Crater floor safari','Maasai culture'], bestTime:'Year-round; June–September for best visibility' },
    magoroto:  { name:'Magoroto',  country:'Tanzania', img:'/assets/images/My favourite part about @therockzanzibar was….jpeg',  desc:'A hidden gem in Tanga Region, Magoroto offers lush tropical forest, a beautiful hidden lake, and adventure activities perfect for group getaways.', highlights:['Kayaking on Magoroto Lake','Zip-lining','Paintball','Forest trails'], bestTime:'Year-round' },
  };
  dest: any;

  constructor(private route: ActivatedRoute, private tourService: TourService, private router: Router) {}

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    this.dest = this.destMap[this.slug] || { name: this.slug.replace(/-/g,' '), country:'Tanzania', img:'/assets/images/African Savannah.jpeg', desc:'Explore this stunning destination with Tanzania Safari Queens.', highlights:[], bestTime:'Year-round' };
    this.tourService.getAll().subscribe(t => {
      this.tours = t.filter(tour => tour.destination.toLowerCase().includes(this.slug.replace(/-/g,' ').toLowerCase()) || tour.slug.includes(this.slug));
    });
  }
}
