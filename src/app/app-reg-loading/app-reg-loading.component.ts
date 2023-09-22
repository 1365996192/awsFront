import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-app-reg-loading',
  templateUrl: './app-reg-loading.component.html',
  styleUrls: ['./app-reg-loading.component.css']
})
export class AppRegLoadingComponent {
  constructor(private router: Router) {

  }
  size: NzButtonSize = 'large';
}
