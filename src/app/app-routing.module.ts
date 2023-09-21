import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDisplayComponent } from './data-display/data-display.component';
import { BeginPageComponent } from './begin-page/begin-page.component';
import { InterestPageComponent } from './interest-page/interest-page.component';
import { SurveyOnePageComponent } from './survey-one-page/survey-one-page.component';
import { SurveyTwoPageComponent } from './survey-two-page/survey-two-page.component';
import { SurveyThreePageComponent } from './survey-three-page/survey-three-page.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { SurveyEndComponent } from './survey-end/survey-end.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
import { DashboardCommunityComponent } from './dashboard/dashboard-community/dashboard-community.component';
import { DashboardNewsComponent } from './dashboard/dashboard-news/dashboard-news.component';
import { DashboardMeComponent } from './dashboard/dashboard-me/dashboard-me.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'datas', component: DataDisplayComponent},
  { path:'begin',component:BeginPageComponent},
  {path:'interest',component:InterestPageComponent},
  {path:'survey',
  component:SurveyPageComponent,
  children:[
    {path:'one',component:SurveyOnePageComponent},
    {path:'two',component:SurveyTwoPageComponent},
    {path:'three',component:SurveyThreePageComponent},
    {path:'end',component:SurveyEndComponent}
    ]
  },
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'main',component:DashboardMainComponent},
    {path:'community', component:DashboardCommunityComponent},
    {path:'news',component:DashboardNewsComponent},
    {path:'me', component:DashboardMeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  //导出 RouterModule，以便它在整个应用程序中生效
})
export class AppRoutingModule { }