import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-survey-three-page',
  templateUrl: './survey-three-page.component.html',
  styleUrls: ['./survey-three-page.component.css']
})
export class SurveyThreePageComponent {
  constructor(private router: Router){

  }
  size: NzButtonSize = 'large';
  onBack() {
    this.router.navigateByUrl("/survey/two");  //createteachclass是我想要跳转到的界面，你直接写你需要跳转到的界面路径就Ok了
  }
}
