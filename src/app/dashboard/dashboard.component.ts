import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router){

  }
  size: NzButtonSize = 'small';

  goToLogin(){
    this.router.navigateByUrl("userLogin")
  }
  goToMain(){
    this.router.navigateByUrl("dashboard/main")
  }
  goToCommunity(){
    this.router.navigateByUrl("dashboard/community")
  }
  goToNews(){
    this.router.navigateByUrl("dashboard/news")
  }
  goToMe(){
    this.router.navigateByUrl("dashboard/me")
  }
}
