import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
@Component({ selector:'app-forgot-password', templateUrl:'./forgot-password.component.html', styleUrls:['./auth.scss'] })
export class ForgotPasswordComponent {
  form = this.fb.group({ email:['', [Validators.required, Validators.email]] });
  sent = false; submitting = false; error = '';
  constructor(private fb: FormBuilder, private auth: AuthService) {}
  submit() {
    if (this.form.invalid) return;
    this.submitting = true;
    this.auth.resetPassword(this.form.value.email!).subscribe({
      next: () => { this.sent = true; this.submitting = false; },
      error: () => { this.error = 'Email not found.'; this.submitting = false; }
    });
  }
}
