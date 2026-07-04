import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService); const router = inject(Router);
  return auth.currentUser$.pipe(take(1), map(u => {
    if (u) return true;
    router.navigate(['/auth/login'], { queryParams: { returnUrl: location.pathname } });
    return false;
  }));
};
