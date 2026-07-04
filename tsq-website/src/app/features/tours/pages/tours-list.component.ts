import { Component, OnInit } from '@angular/core';
import { TourService, SEED_TOURS } from '../../../core/services/tour.service';
import { Tour, TourCategory } from '../../../core/models/tour.model';
import { SeoService } from '../../../core/services/seo.service';

@Component({ selector:'app-tours-list', templateUrl:'./tours-list.component.html', styleUrls:['./tours-list.component.scss'] })
export class ToursListComponent implements OnInit {
  tours: Tour[] = [];
  filtered: Tour[] = [];
  search = '';
  activeCategory: TourCategory | 'all' = 'all';
  categories: { label:string; value:TourCategory|'all' }[] = [
    { label:'All', value:'all' },
    { label:'Wildlife Safari', value:'wildlife-safari' },
    { label:'Beach', value:'beach' },
    { label:'Hiking', value:'hiking' },
    { label:'Cultural', value:'cultural' },
    { label:'Adventure', value:'adventure' },
    { label:'City Tour', value:'city-tour' },
  ];

  constructor(private tourService: TourService, private seo: SeoService) {}

  ngOnInit() {
    this.tourService.getAll().subscribe(t => { this.tours = t; this.filter(); });
    this.seo.set({ title:'Tours & Safaris | Tanzania Safari Queens', description:'Browse our curated tours across Tanzania and beyond.' });
  }

  filter() {
    let r = this.tours;
    if (this.activeCategory !== 'all') r = r.filter(t => t.category === this.activeCategory);
    if (this.search.trim()) { const q = this.search.toLowerCase(); r = r.filter(t => t.title.toLowerCase().includes(q) || t.destination.toLowerCase().includes(q)); }
    this.filtered = r;
  }

  setCategory(c: TourCategory | 'all') { this.activeCategory = c; this.filter(); }
  onSearch(e: Event) { this.search = (e.target as HTMLInputElement).value; this.filter(); }
}
