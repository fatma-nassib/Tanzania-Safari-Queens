import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({ selector:'app-login', templateUrl:'./login.component.html', styleUrls:['./auth.scss'] })
export class LoginComponent {
  form = this.fb.group({ email:['',  [Validators.required, Validators.email]], password:['', [Validators.required, Validators.minLength(6)]] });
  submitting = false; error = '';
  returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private route: ActivatedRoute) {}

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.submitting = true; this.error = '';
    this.auth.login(this.form.value.email!, this.form.value.password!).subscribe({
      next: () => this.router.navigateByUrl(this.returnUrl),
      error: (e: any) => { this.error = this.mapError(e.code); this.submitting = false; }
    });
  }
  loginGoogle() {
    this.auth.loginWithGoogle().subscribe({
      next: () => this.router.navigateByUrl(this.returnUrl),
      error: (e: any) => { this.error = this.mapError(e.code); }
    });
  }
  private mapError(code: string) {
    const m: Record<string,string> = {
      'auth/user-not-found':'No account with this email.', 'auth/wrong-password':'Incorrect password.',
      'auth/too-many-requests':'Too many attempts. Try again later.', 'auth/invalid-email':'Invalid email address.'
    };
    return m[code] || 'Login failed. Please try again.';
  }
}
