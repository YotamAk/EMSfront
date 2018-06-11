import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HospitalComponent } from './main/hospital/hospital.component';
import { EditInjuredComponent } from './main/hospital/edit-injured/edit-injured.component';
import { EmseventsComponent } from './main/emsevents/emsevents.component';
import { EventDetailsComponent } from './main/emsevents/event-details/event-details.component';
import { UsersComponent } from './main/users/users.component';
import { InjuredsComponent } from './main/injureds/injureds.component';
import { HomeComponent } from './main/home/home.component';
import { HospitalsComponent } from './main/hospitals/hospitals.component';
import { UserProfileComponent } from './main/users/user-profile/user-profile.component';
import { AddUserComponent } from './main/users/add-user/add-user.component';
import { EditUserComponent } from './main/users/edit-user/edit-user.component';
import { LoginComponent } from './main/login/login.component';
import { AddHospitalComponent } from './main/hospitals/add-hospital/add-hospital.component';
import { EditHospitalComponent } from './main/hospitals/edit-hospital/edit-hospital.component';
import { EditEventComponent } from './main/emsevents/edit-event/edit-event.component';
import { InjuredReportComponent } from './main/injureds/injured-report/injured-report.component';


const routes: Routes = [

{path:"", redirectTo:"home", pathMatch:"full"},
{path:"main", component:MainComponent},
{path:"hospital", component:HospitalComponent},
{path:"emsevents", component:EmseventsComponent},
{path:"users", component:UsersComponent},
{path:"injureds", component:InjuredsComponent},
{path:"home", component:HomeComponent},
{path:"hospitals", component:HospitalsComponent},
{path:"edit-hospital/:id", component:EditHospitalComponent},
{path:"user-profile/:id", component:UserProfileComponent},
{path:"edit-user/:id", component:EditUserComponent},
{path:"edit-event/:id", component:EditEventComponent},
{path:"edit-injured/:id", component:EditInjuredComponent},
{path:"injured-report/:QrId", component:InjuredReportComponent},
{path:"add-user", component:AddUserComponent},
{path:"login", component:LoginComponent},
{path:"add-hospital", component:AddHospitalComponent},
{path:"event-details/:id", component:EventDetailsComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }