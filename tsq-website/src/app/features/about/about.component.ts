import { Component } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({ selector:'app-about', templateUrl:'./about.component.html', styleUrls:['./about.component.scss'] })
export class AboutComponent {
  values = [
    { icon:'Fearless', title:'Fearlessness',         desc:'We embrace Adventure & Success with Courage and Confidence. No dream is too big, no destination too far for a Queen.' },
    { icon:'Sister', title:'Sisterhood',            desc:'We support, comfort, uplift, and celebrate one another. Every member is family - from Dar es Salaam to Dubai.' },
    { icon:'Inclusive', title:'Inclusivity & Diversity', desc:'We welcome women of all races, cultures & backgrounds. All experiences matter. Every Queen belongs here.' },
    { icon:'Empower', title:'Empowerment',           desc:'We inspire confidence, independence, and courage in travel & tourism, finance, career, and social life - providing knowledge, resources, and encouragement for women to thrive.' },
    { icon:'Explore', title:'Exploration & Discovery', desc:'We encourage curiosity about the world, travel & tourism, cultures and oneself. Every journey is a chance to discover something new.' },
    { icon:'Safe', title:'Safety & Responsibility', desc:'We promote safe and responsible travel practices and investments, ensuring every member feels secure and respected within the community.' },
  ];

  objectives = [
    { title:'Empower Women',                    desc:'Inspire confidence and independence in travel, finance and social life.' },
    { title:'Build a Global Sisterhood',        desc:'Unite women of all races, cultures, and backgrounds around the world.' },
    { title:'Promote Safe & Responsible Travel', desc:'Share tips, guides, and practices that ensure women feel secure on their journeys.' },
    { title:'Create Opportunities for Connections', desc:'Host meet-ups, group trips, and virtual events in Tanzania & beyond.' },
    { title:'Showcase Tanzania & Global Adventures', desc:'Highlight Tanzania and global travel experiences & investment opportunities.' },
    { title:'Provide Education & Resources',    desc:'Offer travel information, financial education, trainings, and empowerment programs.' },
    { title:'Encourage Growth',                 desc:'Use travel & investment as a tool for self-discovery and empowerment.' },
  ];

  milestones = [
    { year:'2020', event:'Tanzania Safari Queens founded in Dar es Salaam with a bold vision to empower women through travel.' },
    { year:'2021', event:'First group trip to Zanzibar - 25 Queens attended, marking the beginning of a legendary sisterhood.' },
    { year:'2022', event:'Launched investment & financial literacy workshops, combining travel with wealth creation.' },
    { year:'2023', event:'Expanded to East Africa - successful trips to Nairobi & Mombasa added to the calendar.' },
    { year:'2024', event:'Reached 300+ members and launched first international trips to Dubai and beyond.' },
    { year:'2025', event:'500+ Queens worldwide. Galentine\'s Soirée became the flagship annual celebration event. Pugu Hiking Seasons 1 & 2 sold out within days.' },
    { year:'2026', event:'Website launch and digital transformation - bringing TSQ to the world online.' },
  ];

  galleryStrip = [
    { url:'https://images.unsplash.com/photo-1612296727716-d7b8e2b53f87?w=400&q=80', alt:'TSQ beach trip' },
    { url:'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&q=80', alt:'Safari adventure' },
    { url:'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?w=400&q=80', alt:'Women community' },
    { url:'https://images.unsplash.com/photo-1562832135-14a35d25edef?w=400&q=80', alt:'Group tour' },
    { url:'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=400&q=80', alt:'African sunset' },
    { url:'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&q=80', alt:'Cultural experience' },
  ];

  constructor(private seo: SeoService) {
    seo.set({ title:'About Us | Tanzania Safari Queens', description:'Learn about our mission to empower women through travel, sisterhood and adventure across Tanzania and the world.' });
  }
}
