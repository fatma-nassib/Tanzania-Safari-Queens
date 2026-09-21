import { Component, HostListener } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({ selector:'app-gallery', templateUrl:'./gallery.component.html', styleUrls:['./gallery.component.scss'] })
export class GalleryComponent {
  activeCategory = 'all';
  lightboxImg = '';
  lightboxOpen = false;

  categories = [
    { label:'All',                value:'all'       },
    { label:'Goal Setting',       value:'goal'      },
    { label:"Galentine's Soirée", value:'galentine' },
    { label:'Pugu Hiking S1',     value:'pugu1'     },
    { label:'Pugu Hiking S2',     value:'pugu2'     },
    { label:'Mbudya Island',      value:'mbudya'    },
    { label:'Safari Moments',     value:'safari'    },
  ];

  // All local photos from assets/images
  allPhotos = [
    // Goal Setting
    { src:"/assets/images/We raised families, built careers—now it's our….jpeg", alt:'Women empowerment talk', cat:'goal' },
    { src:'/assets/images/Your Next Adventure Starts With a Plan ✈️🌍.jpeg', alt:'Group workshop', cat:'goal' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-39-18.png', alt:'Planning session', cat:'goal' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-40-19.png', alt:'Vision board', cat:'goal' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-40-25.png', alt:'Goal setting', cat:'goal' },
    // Galentine's
    { src:'/assets/images/Screenshot From 2026-09-21 11-36-47.png', alt:"Galentine's celebration", cat:'galentine' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-37-10.png', alt:'Queens dressed up', cat:'galentine' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-37-18.png', alt:'Soirée evening', cat:'galentine' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-37-23.png', alt:'Celebration dinner', cat:'galentine' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-37-27.png', alt:'Pink soirée', cat:'galentine' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-37-32.png', alt:'Glam night', cat:'galentine' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-37-46.png', alt:'Sisterhood celebration', cat:'galentine' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-37-51.png', alt:'Queens gathering', cat:'galentine' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-37-56.png', alt:'Evening party', cat:'galentine' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-38-00.png', alt:'Dance floor', cat:'galentine' },
    // Pugu S1
    { src:'/assets/images/Screenshot From 2026-09-21 11-38-17.png', alt:'Forest hiking trail', cat:'pugu1' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-38-27.png', alt:'Group hiking adventure', cat:'pugu1' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-38-32.png', alt:'Kayaking on the lake', cat:'pugu1' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-38-35.png', alt:'Lake expedition', cat:'pugu1' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-38-38.png', alt:'Nature landscape', cat:'pugu1' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-38-42.png', alt:'Forest walk', cat:'pugu1' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-38-45.png', alt:'Hiking group', cat:'pugu1' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-38-49.png', alt:'Trail adventure', cat:'pugu1' },
    // Pugu S2
    { src:'/assets/images/Screenshot From 2026-09-21 11-38-57.png', alt:'Hiking season 2', cat:'pugu2' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-39-47.png', alt:'Group adventure', cat:'pugu2' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-40-35.png', alt:'Team bonding', cat:'pugu2' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-40-49.png', alt:'Forest activities', cat:'pugu2' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-40-54.png', alt:'Nature trek', cat:'pugu2' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-40-59.png', alt:'Outdoor fun', cat:'pugu2' },
    // Mbudya Island
    { src:'/assets/images/Mombasa Island.jpeg', alt:'Mbudya beach', cat:'mbudya' },
    { src:'/assets/images/Island Gal 🌴.jpeg', alt:'Island boat trip', cat:'mbudya' },
    { src:'/assets/images/My favourite part about @therockzanzibar was….jpeg', alt:'Tropical water', cat:'mbudya' },
    { src:'/assets/images/effdeesea ✨.jpeg', alt:'Beach queens', cat:'mbudya' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-41-04.png', alt:'Island vibes', cat:'mbudya' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-41-27.png', alt:'Beach day', cat:'mbudya' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-41-37.png', alt:'Ocean view', cat:'mbudya' },
    { src:'/assets/images/Screenshot From 2026-09-21 11-41-43.png', alt:'Tropical paradise', cat:'mbudya' },
    // Safari
    { src:'/assets/images/#safari #kenya #masaimara #lions #pictureinspo….jpeg', alt:'African queens travelling', cat:'safari' },
    { src:'/assets/images/African Savannah.jpeg', alt:'Serengeti wildlife', cat:'safari' },
    { src:'/assets/images/654288652142854768.jpeg', alt:'Safari game drive', cat:'safari' },
    { src:'/assets/images/8162843071361975.jpeg', alt:'Ngorongoro crater', cat:'safari' },
    { src:'/assets/images/398850110773908284.jpeg', alt:'Kilimanjaro peak', cat:'safari' },
    { src:'/assets/images/4222193395456247.jpeg', alt:'Safari adventure', cat:'safari' },
    { src:'/assets/images/5136987069773130.jpeg', alt:'Wildlife encounter', cat:'safari' },
    { src:'/assets/images/Globalnista®_ BlackGirlTravel _ Exclusive Group Travel Club for Black Women.jpeg', alt:'Travel community', cat:'safari' },
  ];

  get filtered() {
    return this.activeCategory === 'all' ? this.allPhotos : this.allPhotos.filter(p => p.cat === this.activeCategory);
  }

  openLightbox(src: string) { this.lightboxImg = src; this.lightboxOpen = true; document.body.style.overflow = 'hidden'; }
  closeLightbox() { this.lightboxOpen = false; document.body.style.overflow = ''; }
  @HostListener('document:keydown.escape') onEsc() { this.closeLightbox(); }

  constructor(private seo: SeoService) {
    seo.set({ title:'Gallery | Tanzania Safari Queens', description:'Photos from our incredible adventures, events and group trips across Tanzania and the world.' });
  }
}
