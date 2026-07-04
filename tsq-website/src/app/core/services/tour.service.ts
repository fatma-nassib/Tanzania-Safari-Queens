import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData,
         query, where, orderBy, limit, addDoc, updateDoc, deleteDoc, Timestamp } from '@angular/fire/firestore';
import { Observable, of, from } from 'rxjs';
import { Tour, TourCategory, TourRegion } from '../models/tour.model';

export const SEED_TOURS: Tour[] = [
  {
    id:'tour-1', slug:'serengeti-3day-safari', title:'Serengeti 3-Day Safari',
    destination:'Serengeti', region:'tanzania', category:'wildlife-safari',
    duration:3, groupSize:{min:2,max:12},
    price:{amount:850000, currency:'TZS', perPerson:true},
    images:['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=85','https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=85'],
    coverImage:'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=85',
    summary:'Witness the Great Migration across endless golden plains in this unforgettable 3-day adventure.',
    description:'Experience the world-famous Serengeti National Park on this immersive 3-day safari. Watch lions, elephants, and the annual wildebeest migration against the backdrop of endless savannah.',
    itinerary:[
      { day:1, title:'Arrival & Evening Game Drive', description:'Arrive at Seronera airstrip. Check into lodge. Evening game drive as the sun sets over the savannah.', accommodation:'Serengeti Lodge', meals:['dinner'] },
      { day:2, title:'Full Day Game Drive', description:'Full day exploring the central Serengeti. Picnic lunch in the bush. Spot the Big Five.', accommodation:'Serengeti Lodge', meals:['breakfast','lunch','dinner'] },
      { day:3, title:'Morning Drive & Departure', description:'Dawn game drive to catch predators at work. Brunch then transfer to airstrip.', meals:['breakfast'] },
    ],
    included:['Accommodation','All meals as specified','Game drives','Park fees','Transport'],
    excluded:['Flights to/from Serengeti','Travel insurance','Tips','Personal items'],
    difficulty:'easy', rating:4.9, reviewCount:128, featured:true, active:true, createdAt:new Date()
  },
  {
    id:'tour-2', slug:'zanzibar-beach-escape', title:'Zanzibar 5-Day Beach Escape',
    destination:'Zanzibar', region:'tanzania', category:'beach',
    duration:5, groupSize:{min:1,max:20},
    price:{amount:1200000, currency:'TZS', perPerson:true},
    images:['https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&q=85','https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=85'],
    coverImage:'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&q=85',
    summary:'White sand beaches, turquoise waters, and spice markets. Zanzibar\'s magic awaits.',
    description:'Immerse yourself in the exotic charm of Zanzibar Island, pristine beaches, historic Stone Town, vibrant spice markets, and unforgettable sunsets.',
    itinerary:[
      { day:1, title:'Arrive Stone Town', description:'Airport pickup. Explore Stone Town UNESCO heritage site.', accommodation:'Stone Town Boutique Hotel', meals:['dinner'] },
      { day:2, title:'Spice Tour & Prison Island', description:'Morning spice farm tour. Afternoon Prison Island visit.', accommodation:'Stone Town Boutique Hotel', meals:['breakfast','lunch'] },
      { day:3, title:'North Beaches', description:'Transfer to Nungwi. Sunset dhow cruise.', accommodation:'Beach Resort', meals:['breakfast','dinner'] },
      { day:4, title:'Water Sports Day', description:'Snorkeling, kayaking, and seafood beach BBQ.', accommodation:'Beach Resort', meals:['breakfast','dinner'] },
      { day:5, title:'Departure', description:'Leisurely morning. Airport transfer.', meals:['breakfast'] },
    ],
    included:['5 nights accommodation','Breakfast daily','Spice tour','Prison Island visit','Dhow cruise','Airport transfers'],
    excluded:['Flights','Lunch & dinners (except specified)','Water sports equipment'],
    difficulty:'easy', rating:4.8, reviewCount:94, featured:true, active:true, createdAt:new Date()
  },
  {
    id:'tour-3', slug:'kilimanjaro-summit-trek', title:'Kilimanjaro Marangu Route - 6 Days',
    destination:'Mt. Kilimanjaro', region:'tanzania', category:'hiking',
    duration:6, groupSize:{min:2,max:8},
    price:{amount:2100000, currency:'TZS', perPerson:true},
    images:['https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=800&q=85','https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85'],
    coverImage:'https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=800&q=85',
    summary:'Conquer the Roof of Africa on the classic Marangu Route with expert guides.',
    description:'Stand at the summit of Africa\'s highest peak (5,895m). The Marangu "Coca-Cola" route is the most accessible with hut accommodation throughout.',
    itinerary:[
      { day:1, title:'Marangu Gate to Mandara Hut', description:'Trek through rainforest to Mandara Hut (2,700m).', accommodation:'Mandara Hut', meals:['lunch','dinner'] },
      { day:2, title:'Mandara to Horombo Hut', description:'Cross the heath zone to Horombo Hut (3,700m).', accommodation:'Horombo Hut', meals:['breakfast','lunch','dinner'] },
      { day:3, title:'Acclimatization Day', description:'Rest and acclimatize at Horombo. Optional hike.', accommodation:'Horombo Hut', meals:['breakfast','lunch','dinner'] },
      { day:4, title:'Horombo to Kibo Hut', description:'Cross the Saddle to Kibo Hut (4,700m).', accommodation:'Kibo Hut', meals:['breakfast','lunch','dinner'] },
      { day:5, title:'Summit Attempt & Descent', description:'Midnight summit push. Reach Uhuru Peak at dawn. Descend to Horombo.', accommodation:'Horombo Hut', meals:['breakfast','dinner'] },
      { day:6, title:'Descent to Gate', description:'Final descent to Marangu Gate. Certificate awarded.', meals:['breakfast','lunch'] },
    ],
    included:['Park fees','Hut accommodation','All mountain meals','Certified guide & porters','Safety oxygen kit'],
    excluded:['Gear rental','Tips','Travel insurance','Personal equipment'],
    difficulty:'challenging', rating:4.7, reviewCount:67, featured:true, active:true, createdAt:new Date()
  },
  {
    id:'tour-4', slug:'ngorongoro-day-trip', title:'Ngorongoro Crater Day Trip',
    destination:'Ngorongoro', region:'tanzania', category:'wildlife-safari',
    duration:1, groupSize:{min:2,max:10},
    price:{amount:420000, currency:'TZS', perPerson:true},
    images:['https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&q=85','https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=85'],
    coverImage:'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&q=85',
    summary:'Descend into the world\'s largest intact volcanic caldera, home to the Big Five.',
    description:'A full day inside the Ngorongoro Crater - a natural enclosure hosting over 25,000 large animals including the rare black rhino.',
    itinerary:[
      { day:1, title:'Full Day Crater Exploration', description:'Early pickup. Descend 600m into the crater. Full day game drive. Picnic lunch on crater floor. Ascent at 5pm.', meals:['breakfast','lunch'] },
    ],
    included:['Transport','Park & conservation fees','Picnic lunch','English-speaking guide'],
    excluded:['Accommodation','Dinner','Personal items'],
    difficulty:'easy', rating:4.9, reviewCount:203, featured:true, active:true, createdAt:new Date()
  },
  {
    id:'tour-5', slug:'magoroto-forest-adventure', title:'Magoroto Forest & Lake Adventure',
    destination:'Magoroto', region:'tanzania', category:'adventure',
    duration:2, groupSize:{min:4,max:20},
    price:{amount:280000, currency:'TZS', perPerson:true},
    images:['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=85','https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=85'],
    coverImage:'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=85',
    summary:'Hike through lush forest, kayak on a hidden lake, and enjoy zip-lining.',
    description:'Magoroto Forest is Tanga Region\'s best-kept secret - lush tropical forest, a hidden lake, and adventure activities perfect for group getaways.',
    itinerary:[
      { day:1, title:'Forest Hike & Water Activities', description:'Guided forest hike. Kayaking and swimming. Evening bonfire.', accommodation:'Magoroto Lodge', meals:['lunch','dinner'] },
      { day:2, title:'Zip-line, Paintball & Return', description:'Morning zip-lining and paintball. Lunch then return.', meals:['breakfast','lunch'] },
    ],
    included:['Transport from Dar es Salaam','1 night accommodation','All activities','All meals'],
    excluded:['Personal items','Tips'],
    difficulty:'moderate', rating:4.8, reviewCount:156, featured:true, active:true, createdAt:new Date()
  },
  {
    id:'tour-6', slug:'nairobi-city-safari-combo', title:'Nairobi City & Safari Combo',
    destination:'Nairobi', region:'east-africa', category:'city-tour',
    duration:3, groupSize:{min:2,max:15},
    price:{amount:950000, currency:'TZS', perPerson:true},
    images:['https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=85','https://images.unsplash.com/photo-1612296727716-d7b8e2b53f87?w=800&q=85'],
    coverImage:'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=85',
    summary:'Combine Nairobi\'s vibrant city life with Nairobi National Park game drives.',
    description:'Three days blending urban culture and wild safaris - Giraffe Centre, Karen Blixen Museum, and game drives with a city skyline backdrop.',
    itinerary:[
      { day:1, title:'Arrive Nairobi', description:'Airport pickup. Hotel check-in. Evening city tour.', accommodation:'Nairobi Hotel', meals:['dinner'] },
      { day:2, title:'Giraffe Centre & Game Drive', description:'Giraffe Centre, Elephant Orphanage, Nairobi National Park.', accommodation:'Nairobi Hotel', meals:['breakfast','lunch'] },
      { day:3, title:'Karen Blixen & Departure', description:'Karen Blixen Museum. Shopping. Departure.', meals:['breakfast'] },
    ],
    included:['Return flights','Hotel','Entrance fees','Transport','Guided tours'],
    excluded:['Meals not specified','Personal shopping'],
    difficulty:'easy', rating:4.6, reviewCount:48, featured:false, active:true, createdAt:new Date()
  },
];

@Injectable({ providedIn: 'root' })
export class TourService {
  private col = collection(this.firestore, 'tours');

  constructor(private firestore: Firestore) {}

  /** Returns seed data immediately - swap to Firestore once populated via seed script */
  getAll(): Observable<Tour[]> {
    return of(SEED_TOURS.filter(t => t.active));
  }

  getFeatured(count = 6): Observable<Tour[]> {
    return of(SEED_TOURS.filter(t => t.featured && t.active).slice(0, count));
  }

  getById(idOrSlug: string): Observable<Tour | undefined> {
    return of(SEED_TOURS.find(t => t.id === idOrSlug || t.slug === idOrSlug));
  }

  getByRegion(region: TourRegion): Observable<Tour[]> {
    return of(SEED_TOURS.filter(t => t.region === region && t.active));
  }

  getByCategory(category: TourCategory): Observable<Tour[]> {
    return of(SEED_TOURS.filter(t => t.category === category && t.active));
  }

  // ── Firestore CRUD (used once you switch to live data) ──────────────────
  addTour(tour: Omit<Tour, 'id'>) {
    return from(addDoc(this.col, { ...tour, createdAt: Timestamp.now() }));
  }
  updateTour(id: string, data: Partial<Tour>) {
    return from(updateDoc(doc(this.firestore, 'tours', id), data as any));
  }
  deleteTour(id: string) {
    return from(deleteDoc(doc(this.firestore, 'tours', id)));
  }

  /** Switch to live Firestore once seeded */
  getAllFromFirestore(): Observable<Tour[]> {
    return collectionData(
      query(this.col, where('active', '==', true), orderBy('createdAt', 'desc')),
      { idField: 'id' }
    ) as Observable<Tour[]>;
  }
}
