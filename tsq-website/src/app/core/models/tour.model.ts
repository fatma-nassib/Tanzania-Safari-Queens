export type TourRegion   = 'tanzania'|'east-africa'|'south-africa'|'international';
export type TourCategory = 'wildlife-safari'|'beach'|'hiking'|'cultural'|'adventure'|'city-tour';
export interface ItineraryDay { day:number; title:string; description:string; accommodation?:string; meals:string[]; }
export interface Tour {
  id:string; slug:string; title:string; destination:string; region:TourRegion; category:TourCategory;
  duration:number; groupSize:{min:number;max:number}; price:{amount:number;currency:string;perPerson:boolean};
  images:string[]; coverImage:string; summary:string; description:string;
  itinerary:ItineraryDay[]; included:string[]; excluded:string[];
  difficulty:'easy'|'moderate'|'challenging'; rating:number; reviewCount:number;
  featured:boolean; active:boolean; createdAt:any;
}
