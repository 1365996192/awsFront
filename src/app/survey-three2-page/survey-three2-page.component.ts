import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-survey-three2-page',
  templateUrl: './survey-three2-page.component.html',
  styleUrls: ['./survey-three2-page.component.css']
})
export class SurveyThree2PageComponent {
  constructor(private router: Router){

  }
  size: NzButtonSize = 'default';
  onBack() {
    this.router.navigateByUrl("/survey/two");  //createteachclass是我想要跳转到的界面，你直接写你需要跳转到的界面路径就Ok了
  }
}
