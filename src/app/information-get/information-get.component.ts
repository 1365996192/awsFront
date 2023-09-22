import { Component } from '@angular/core';
// import { NzCardModule } from 'ng-zorro-antd/card';
// import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
// import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
// import { getISOWeek } from 'date-fns';
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
  selector: 'app-information-get',
  templateUrl: './information-get.component.html',
  styleUrls: ['./information-get.component.css']
})
export class InformationGetComponent {

  validateForm: FormGroup<{
    state: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
    agree: FormControl<boolean>;
  }>;

  submitForm(): void {
    if (this.validateForm.valid) {
      this.router.navigateByUrl("submitLoading");
      console.log('submit', this.validateForm.value);
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
      state: ['',[Validators.pattern(/^[A-Za-z\s-]+$/)]],
      phone: ['', [Validators.pattern(/^1\d{10}$/)]],
      email: ['', [Validators.email, Validators.required]],
      agree: [false]
    });
    this.i18n.setLocale(en_US);
  }
  size: NzButtonSize = 'large';
  onBack() {
    this.router.navigateByUrl("dashboard");  //createteachclass是我想要跳转到的界面，你直接写你需要跳转到的界面路径就Ok了
  }
}

