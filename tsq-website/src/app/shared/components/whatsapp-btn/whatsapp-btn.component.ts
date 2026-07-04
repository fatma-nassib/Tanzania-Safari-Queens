import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
@Component({
  selector:'app-whatsapp-btn',
  template:`
    <a [href]="href" target="_blank" rel="noopener" class="wa-fab" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.858L.057 23.535a.75.75 0 00.916.916l5.677-1.477A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.5-5.254-1.377l-.377-.214-3.915 1.018 1.018-3.839-.231-.389A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
      <span>Chat</span>
    </a>`,
  styles:[`
    .wa-fab{ position:fixed;bottom:1.75rem;right:1.75rem;z-index:999;
      display:flex;align-items:center;gap:.45rem;padding:.6rem 1.1rem .6rem .75rem;
      background:#25D366;color:#fff;border-radius:50px;
      box-shadow:0 6px 24px rgba(37,211,102,.4);text-decoration:none;
      font-size:.82rem;font-weight:700;font-family:'Jost',sans-serif;
      letter-spacing:.04em;transition:transform .2s,box-shadow .2s;
    }
    .wa-fab:hover{ transform:scale(1.06);box-shadow:0 8px 32px rgba(37,211,102,.55); }
  `]
})
export class WhatsappBtnComponent {
  href = `https://wa.me/${environment.whatsapp.number}?text=Hello%20Tanzania%20Safari%20Queens!%20I%27d%20like%20to%20enquire%20about%20a%20tour.`;
}
