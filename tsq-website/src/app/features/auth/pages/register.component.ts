import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

function passwordMatch(c: AbstractControl) {
  return c.get('password')?.value === c.get('confirm')?.value ? null : { mismatch: true };
}

@Component({ selector:'app-register', templateUrl:'./register.component.html', styleUrls:['./auth.scss'] })
export class RegisterComponent {
  form = this.fb.group({
    displayName: ['', Validators.required],
    email:       ['', [Validators.required, Validators.email]],
    password:    ['', [Validators.required, Validators.minLength(8)]],
    confirm:     ['', Validators.required]
  }, { validators: passwordMatch });
  submitting = false; error = '';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.submitting = true;
    console.log('Register form submitted', this.form.value);
    this.auth.register(this.form.value.email!, this.form.value.password!, this.form.value.displayName!).subscribe({
      next: (result) => {
        console.log('Registration successful', result);
        this.router.navigate(['/']);
      },
      error: (e: any) => {
        console.error('Registration error', e);
        const m: Record<string,string> = { 'auth/email-already-in-use':'Email already registered.', 'auth/weak-password':'Password too weak.' };
        this.error = m[e.code] || 'Registration failed.';
        this.submitting = false;
      }
    });
  }
}
