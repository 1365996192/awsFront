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
  selector: 'app-app-registration',
  templateUrl: './app-registration.component.html',
  styleUrls: ['./app-registration.component.css']
})
export class AppRegistrationComponent {
  sendingCode = false;
  validateForm: FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    dob: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
    agree: FormControl<boolean>;
    code:FormControl<string>;
  }>;

  submitForm(): void {
    if (this.validateForm.valid) {
      const data = {
        firstName: this.validateForm.value.firstName,
        lastName: this.validateForm.value.lastName,
        email: this.validateForm.value.email,
        authCode: this.validateForm.value.code,
        phone: this.validateForm.value.phone
      };
      this.service.appRegistration(data).subscribe((response) => {
        console.log('POST请求成功', response);
        console.log('submit', this.validateForm.value);
      this.router.navigate(['/appRegLoading']);
        // 处理成功的响应，例如重定向到成功页面
      },
      (error) => {
        console.error('POST请求失败', error);
        console.log('submit', this.validateForm.value);
      this.router.navigate(['/appRegLoading']);
        // 处理错误的响应
      })
      
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  sendVerificationCode() {
    const email = this.validateForm.get('email').value;

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
  constructor(
    private fb: NonNullableFormBuilder,
    private i18n: NzI18nService,
    private router: Router,
    private service: AppLoginService
  ) {
    this.validateForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      phone: ['', [Validators.pattern(/^1\d{10}$/)]],
      code:['',[Validators.required,Validators.pattern(/^\d{6}$/)]],
      email: ['', [Validators.email, Validators.required]],
      agree: [false]
    });
    this.i18n.setLocale(en_US);
  }
  size: NzButtonSize = 'large';
}
