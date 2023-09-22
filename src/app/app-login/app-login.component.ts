import { Component } from '@angular/core';
import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';

import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { AppLoginService } from '../service/app-login.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent {

  loginForm: FormGroup;
  sendingCode = false;
  loggingIn = false;
  validateForm: FormGroup<{
    email: FormControl<string>;
    code: FormControl<string>;
  }>;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      const email = this.validateForm.value.email;
    const verificationCode = this.validateForm.value.code;
    console.log(email);
    
    if (!email || !verificationCode) {
      return;
    }

    this.loggingIn = true;
    this.service.loginWithEmailAndCode(email, verificationCode).subscribe(
      (response) => {
        console.log('登录成功', response);
        this.router.navigateByUrl("dashboard");
      console.log('submit', this.validateForm.value);
        this.loggingIn = false;
      },
      (error) => {
        
        this.router.navigateByUrl("dashboard");
        this.loggingIn = false;
      }
    );
      
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
    private router: Router,
    private service:AppLoginService,
  ) {
    this.validateForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      code: ['', [Validators.pattern(/^\d{6}$/),Validators.required]],
    });

    // 初始化 loginForm
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      code: ['', [Validators.pattern(/^\d{6}$/),Validators.required]],
    });
    this.i18n.setLocale(en_US);
  }
  size: NzButtonSize = 'large';
  onBack() {
    this.router.navigateByUrl("dashboard");  //createteachclass是我想要跳转到的界面，你直接写你需要跳转到的界面路径就Ok了
  }
  sendVerificationCode() {
    const email = this.loginForm.get('email').value;

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

  login() {
    const email = this.loginForm.get('email').value;
    const verificationCode = this.loginForm.get('code').value;

    if (!email || !verificationCode) {
      return;
    }

    this.loggingIn = true;
    this.service.loginWithEmailAndCode(email, verificationCode).subscribe(
      (response) => {
        console.log('登录成功', response);
        this.loggingIn = false;
      },
      (error) => {
        console.error('登录失败', error);
        this.loggingIn = false;
      }
    );
  }

}


