import { Component } from '@angular/core';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-app-registration',
  templateUrl: './app-registration.component.html',
  styleUrls: ['./app-registration.component.css']
})
export class AppRegistrationComponent {

  validateForm: FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    dob: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
    agree: FormControl<boolean>;
  }>;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.router.navigate(['/appRegLoading']);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  constructor(
    private fb: NonNullableFormBuilder,
    private i18n: NzI18nService,
    private router: Router
  ) {
    this.validateForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      phone: ['', [Validators.pattern(/^1\d{10}$/)]],
      email: ['', [Validators.email, Validators.required]],
      agree: [false]
    });
    this.i18n.setLocale(en_US);
  }
  size: NzButtonSize = 'large';
}
