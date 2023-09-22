import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginPageComponent } from './begin-page/begin-page.component';
import { InterestPageComponent } from './interest-page/interest-page.component';
import { SurveyOnePageComponent } from './survey-one-page/survey-one-page.component';
import { SurveyTwoPageComponent } from './survey-two-page/survey-two-page.component';
import { SurveyThreePageComponent } from './survey-three-page/survey-three-page.component';
import { SurveyThree2PageComponent } from './survey-three2-page/survey-three2-page.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { SurveyEndComponent } from './survey-end/survey-end.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
import { DashboardCommunityComponent } from './dashboard/dashboard-community/dashboard-community.component';
import { DashboardNewsComponent } from './dashboard/dashboard-news/dashboard-news.component';
import { DashboardMeComponent } from './dashboard/dashboard-me/dashboard-me.component';
import { VoterRegistrationComponent } from './voter-registration/voter-registration.component';
import { AppRegistrationComponent } from './app-registration/app-registration.component';
import { InformationGetComponent } from './information-get/information-get.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SubmitLoadingComponent } from './information-get/submit-loading/submit-loading.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path:'start',component:BeginPageComponent},
  {path:'interest',component:InterestPageComponent},
  {path:'voterRegistration',component:VoterRegistrationComponent},
  {path:'appRegistration',component:AppRegistrationComponent},
  {path:'inforGet',component:InformationGetComponent},
  {path:'userLogin',component:UserLoginComponent },
  {path:'submitLoading', component:SubmitLoadingComponent},
  {path:'survey',
  component:SurveyPageComponent,
  children:[
    {path:'one',component:SurveyOnePageComponent},
    {path:'two',component:SurveyTwoPageComponent},
    {path:'three',component:SurveyThreePageComponent},
    {path:'three2',component:SurveyThree2PageComponent},
    {path:'end',component:SurveyEndComponent},
    {path:'',component:SurveyOnePageComponent}
    ]
  },
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'main',component:DashboardMainComponent},
    {path:'community', component:DashboardCommunityComponent},
    {path:'news',component:DashboardNewsComponent},
    {path:'me', component:DashboardMeComponent},
    {path:'',component:DashboardMainComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  //导出 RouterModule，以便它在整个应用程序中生效
})
export class AppRoutingModule { }