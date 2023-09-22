import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-survey-one-page',
  templateUrl: './survey-one-page.component.html',
  styleUrls: ['./survey-one-page.component.css']
})
export class SurveyOnePageComponent {
  constructor(private router: Router){

  }
  size: NzButtonSize = 'default';
  onBack() {
    this.router.navigateByUrl("interest");  //createteachclass是我想要跳转到的界面，你直接写你需要跳转到的界面路径就Ok了
  }
}
