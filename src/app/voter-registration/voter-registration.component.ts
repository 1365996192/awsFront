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
  selector: 'app-voter-registration',
  templateUrl: './voter-registration.component.html',
  styleUrls: ['./voter-registration.component.css']
})
export class VoterRegistrationComponent {
  voterValidateForm: FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    dob: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
    streetAddress: FormControl<string>;
    city: FormControl<string>;
    zipCode: FormControl<string>;
    country: FormControl<string>;
    agree: FormControl<boolean>;
  }>;

  submitVoterForm(): void {
    if (this.voterValidateForm.valid) {
      console.log('submit', this.voterValidateForm.value);
      this.router.navigate(['/voterRegLoading']);
    } else {
      Object.values(this.voterValidateForm.controls).forEach(control => {
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
    this.voterValidateForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      phone: ['', [Validators.pattern(/^1\d{9}$/)]],
      email: ['', [Validators.email, Validators.required]],
      streetAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.pattern(/^1\d{4}$/)]],
      country: ['', [Validators.required]],
      agree: [false]
    });
    this.i18n.setLocale(en_US);
  }
  size: NzButtonSize = 'large';

}
