import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="nf">
      <div class="nf__bg">
        <img src="/assets/images/African Savannah.jpeg" alt="Serengeti"/>
      </div>
      <div class="nf__overlay"></div>
      <div class="nf__card">
        <div class="nf__code">404</div>
        <h2>Lost on the Savannah?</h2>
        <p>The page you're looking for has wandered off into the wilderness. Let us guide you back.</p>
        <div class="nf__actions">
          <a routerLink="/"      class="btn btn--gold btn--lg">🏠 Go Home</a>
          <a routerLink="/tours" class="btn btn--outline-white btn--lg">🗺️ Browse Tours</a>
        </div>
      </div>
    </div>`,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Jost:wght@400;600&display=swap');
    .nf { min-height:100vh;display:flex;align-items:center;justify-content:center;position:relative;padding:2rem; }
    .nf__bg { position:absolute;inset:0; img{ width:100%;height:100%;object-fit:cover; } }
    .nf__overlay { position:absolute;inset:0;background:rgba(28,18,10,.78); }
    .nf__card { position:relative;z-index:2;text-align:center;max-width:520px; }
    .nf__code { font-family:'Cormorant Garamond',serif;font-size:9rem;font-weight:700;
      color:#C8923A;line-height:1;margin-bottom:.5rem;text-shadow:0 8px 40px rgba(200,146,58,.4); }
    h2 { color:#fff;font-family:'Cormorant Garamond',serif;font-size:2.2rem;margin-bottom:.75rem; }
    p { color:rgba(255,255,255,.75);font-family:'Jost',sans-serif;line-height:1.7;margin-bottom:2rem; }
    .nf__actions { display:flex;gap:1rem;justify-content:center;flex-wrap:wrap; }
    .btn { display:inline-flex;align-items:center;gap:.4rem;padding:.7rem 1.6rem;border-radius:4px;
      font-family:'Jost',sans-serif;font-size:.85rem;font-weight:700;letter-spacing:.06em;
      text-transform:uppercase;text-decoration:none;border:2px solid transparent;transition:all .25s; }
    .btn--gold { background:#C8923A;color:#fff;border-color:#C8923A;&:hover{background:#9E6D1E;} }
    .btn--outline-white { background:transparent;border-color:rgba(255,255,255,.6);color:#fff;
      &:hover{background:#fff;color:#3D2B1F;} }
    .btn--lg { padding:.9rem 2rem;font-size:.9rem; }
  `]
})
export class NotFoundComponent {}
