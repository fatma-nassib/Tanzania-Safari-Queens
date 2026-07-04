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

  // All real Unsplash African/black women & Tanzania photos
  allPhotos = [
    // Goal Setting
    { src:'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80', alt:'Women planning session', cat:'goal' },
    { src:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80', alt:'Queen networking', cat:'goal' },
    { src:'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=600&q=80', alt:'Vision board session', cat:'goal' },
    { src:'https://images.unsplash.com/photo-1596993100471-c3905dafa78e?w=600&q=80', alt:'Women empowerment talk', cat:'goal' },
    { src:'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80', alt:'Group workshop', cat:'goal' },
    // Galentine's
    { src:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', alt:"Galentine's celebration", cat:'galentine' },
    { src:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80', alt:'Queens dressed up', cat:'galentine' },
    { src:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80', alt:'Soirée evening', cat:'galentine' },
    { src:'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=600&q=80', alt:'Celebration dinner', cat:'galentine' },
    { src:'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=600&q=80', alt:'Pink soirée', cat:'galentine' },
    // Pugu S1
    { src:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', alt:'Forest hiking trail', cat:'pugu1' },
    { src:'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80', alt:'Group hiking adventure', cat:'pugu1' },
    { src:'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&q=80', alt:'Kayaking on the lake', cat:'pugu1' },
    { src:'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', alt:'Lake expedition', cat:'pugu1' },
    { src:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80', alt:'Nature landscape', cat:'pugu1' },
    // Pugu S2
    { src:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80', alt:'Hiking season 2', cat:'pugu2' },
    { src:'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=600&q=80', alt:'Group adventure', cat:'pugu2' },
    { src:'https://images.unsplash.com/photo-1562832135-14a35d25edef?w=600&q=80', alt:'Team bonding', cat:'pugu2' },
    { src:'https://images.unsplash.com/photo-1447703693928-9cd89c8d5771?w=600&q=80', alt:'Forest activities', cat:'pugu2' },
    // Mbudya Island
    { src:'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&q=80', alt:'Mbudya beach', cat:'mbudya' },
    { src:'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&q=80', alt:'Island boat trip', cat:'mbudya' },
    { src:'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=600&q=80', alt:'Tropical water', cat:'mbudya' },
    { src:'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', alt:'Beach queens', cat:'mbudya' },
    // Safari
    { src:'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', alt:'Serengeti wildlife', cat:'safari' },
    { src:'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80', alt:'Safari game drive', cat:'safari' },
    { src:'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=600&q=80', alt:'Ngorongoro crater', cat:'safari' },
    { src:'https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=600&q=80', alt:'Kilimanjaro peak', cat:'safari' },
    { src:'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?w=600&q=80', alt:'African queens travelling', cat:'safari' },
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
