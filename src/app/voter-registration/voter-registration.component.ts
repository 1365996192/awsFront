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
import { AppLoginService } from '../service/app-login.service';

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
    authCode:FormControl<string>;
  }>;
  sendingCode=false;

  submitVoterForm(): void {
    console.log(111);
    
    if (this.voterValidateForm.valid) {
      const data = {
        firstName: this.voterValidateForm.value.firstName,
        lastName: this.voterValidateForm.value.lastName,
        email: this.voterValidateForm.value.email,
        phone: this.voterValidateForm.value.phone,
        streetAddress: this.voterValidateForm.value.streetAddress,
        birth:this.voterValidateForm.value.dob,
        city: this.voterValidateForm.value.city,
        authCode:this.voterValidateForm.value.authCode,
      };
      this.service.voterRegistration(data).subscribe((response: any) => {
        console.log('submit', this.voterValidateForm.value);
        this.router.navigate(['/voterRegLoading']);
      },
      (error: any) => {
        console.log('submit', this.voterValidateForm.value);
        this.router.navigate(['/voterRegLoading']);
      })
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
    private router: Router,
    private service: AppLoginService
  ) {
    this.voterValidateForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      phone: ['', [Validators.pattern(/^1\d{9}$/)]],
      email: ['', [Validators.email, Validators.required]],
      streetAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      authCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      country: ['', [Validators.required]],
      agree: [false]
    });
    this.i18n.setLocale(en_US);
  }
  size: NzButtonSize = 'large';
  sendVerificationCode() {
    const email = this.voterValidateForm.get('email').value;

    this.sendingCode = true;
    this.service.sendAuthCode(email).subscribe(
      (response: any) => {
        console.log('验证码已发送', response);
        this.sendingCode = false;
      },
      (error: any) => {
        console.error('发送验证码失败', error);
        this.sendingCode = false;
      }
    );
    return false
  }
}
