import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-submit-loading',
  templateUrl: './submit-loading.component.html',
  styleUrls: ['./submit-loading.component.css']
})
export class SubmitLoadingComponent {
  constructor(private router: Router){

  }
  size: NzButtonSize = 'large';
  onBack() {
    this.router.navigateByUrl("/survey/three2");  //createteachclass是我想要跳转到的界面，你直接写你需要跳转到的界面路径就Ok了
  }
}
