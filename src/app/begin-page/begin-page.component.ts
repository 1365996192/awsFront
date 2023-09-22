import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-begin-page',
  templateUrl: './begin-page.component.html',
  styleUrls: ['./begin-page.component.css']
})
export class BeginPageComponent {
  constructor(private router: Router){

  }
  size: NzButtonSize = 'large';
  goToInterest() {
    this.router.navigateByUrl("interest");  //createteachclass是我想要跳转到的界面，你直接写你需要跳转到的界面路径就Ok了
  }
}
