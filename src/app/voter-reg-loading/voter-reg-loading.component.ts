import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-voter-reg-loading',
  templateUrl: './voter-reg-loading.component.html',
  styleUrls: ['./voter-reg-loading.component.css']
})
export class VoterRegLoadingComponent {
  constructor(private router: Router) {

  }
  size: NzButtonSize = 'large';
}
