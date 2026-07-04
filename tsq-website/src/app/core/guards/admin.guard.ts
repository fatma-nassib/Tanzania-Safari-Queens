import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService); const router = inject(Router);
  return auth.userProfile$.pipe(take(1), map(p => {
    if (p?.role === 'admin') return true;
    router.navigate(['/']); return false;
  }));
};
