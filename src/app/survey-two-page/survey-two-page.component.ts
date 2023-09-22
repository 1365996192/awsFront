import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-survey-two-page',
  templateUrl: './survey-two-page.component.html',
  styleUrls: ['./survey-two-page.component.css']
})
export class SurveyTwoPageComponent {
  constructor(private router: Router){

  }
  size: NzButtonSize = 'default';
  onBack() {
    this.router.navigateByUrl("/survey/one");  //createteachclass是我想要跳转到的界面，你直接写你需要跳转到的界面路径就Ok了
  }
}
