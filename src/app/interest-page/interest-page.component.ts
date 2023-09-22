import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-interest-page',
  templateUrl: './interest-page.component.html',
  styleUrls: ['./interest-page.component.css']
})
export class InterestPageComponent {
  constructor(private router: Router){

  }
  size: NzButtonSize = 'default';
  goToSurvey() {
    this.router.navigateByUrl("survey/one");  //createteachclass是我想要跳转到的界面，你直接写你需要跳转到的界面路径就Ok了
  }
}
