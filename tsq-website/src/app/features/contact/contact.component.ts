import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Firestore, addDoc, collection, Timestamp } from '@angular/fire/firestore';
import { SeoService } from '../../core/services/seo.service';

@Component({ selector:'app-contact', templateUrl:'./contact.component.html', styleUrls:['./contact.component.scss'] })
export class ContactComponent {
  form = this.fb.group({
    name:    ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    phone:   [''],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(20)]]
  });

  submitting = false; success = false; error = '';

  contactInfo = [
    { icon:'phone', label:'Phone', lines:['+255 763 983 920', '+255 745 695 215', '+255 693 124 340'] },
    { icon:'email', label:'Email', lines:['tanzaniasafariqueen@gmail.com'] },
    { icon:'location', label:'Location', lines:['Dar es Salaam, Tanzania'] },
    { icon:'clock', label:'Office Hours', lines:['Mon–Fri: 8:00 AM – 6:00 PM', 'Sat–Sun: 9:00 AM – 4:00 PM'] },
  ];
  faqs = [
    { q:'How do I book a tour?', a:'Browse our Tours page, select your preferred tour and click Book This Tour. Fill in the multi-step booking form and complete payment. You will receive a confirmation email within 24 hours.' },
    { q:'What payment methods do you accept?', a:'We accept M-Pesa (Vodacom), Airtel Money, credit/debit cards, and bank transfers. All payments are processed securely via Flutterwave.' },
    { q:'Is this community only for women?', a:'Yes! Tanzania Safari Queens is an exclusive women-only travel and investment community. All group trips, events, and activities are women-led and women-only.' },
    { q:'Can I join as an international member?', a:'Absolutely! We welcome women from all over the world. Many of our international members join us for Tanzania trips from the diaspora.' },
    { q:'What is your cancellation policy?', a:'Cancellations 30+ days before: full refund. 14-29 days: 50% refund. Less than 14 days: no refund. We highly recommend travel insurance.' },
    { q:'Do you offer group discounts?', a:'Yes! Groups of 10+ receive special pricing. Contact us directly for corporate groups, school trips, and bachelorette party packages.' },
  ];
    subjects = ['Tour Enquiry','Custom Trip Request','Group Booking','Partnership','Media','Other'];

  constructor(private fb: FormBuilder, private firestore: Firestore, private seo: SeoService) {
    seo.set({ title:'Contact Us | Tanzania Safari Queens', description:'Get in touch with Tanzania Safari Queens. We are here to help plan your adventure.' });
  }

  async submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.submitting = true; this.error = '';
    try {
      await addDoc(collection(this.firestore, 'enquiries'), {
        ...this.form.value, createdAt: Timestamp.now(), status: 'new'
      });
      this.success = true; this.form.reset();
    } catch (e) {
      this.error = 'Failed to send. Please try WhatsApp or email directly.';
    } finally { this.submitting = false; }
  }

  f(name: string) { return this.form.get(name); }
  getIconSvg(iconName: string): string {
    const icons: {[key: string]: string} = {
      phone: '<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>',
      email: '<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
      location: '<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
      clock: '<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>'
    };
    return icons[iconName] || '';
  }
}

// Add faqs array to ContactComponent class:
// (inject into ngOnInit or as class property)
// ─── FAQ data ───────────────────────────────────────────────────────────────
// (already referenced in template via public property)
