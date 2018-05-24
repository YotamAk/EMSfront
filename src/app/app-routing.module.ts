import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { EmseventsComponent } from './main/emsevents/emsevents.component';
import { UsersComponent } from './main/users/users.component';
import { InjuredsComponent } from './main/injureds/injureds.component';
import { HomeComponent } from './main/home/home.component';
import { HospitalsComponent } from './main/hospitals/hospitals.component';
import { UserProfileComponent } from './main/users/user-profile/user-profile.component';
import { AddUserComponent } from './main/users/add-user/add-user.component';
import { LoginComponent } from './main/login/login.component';
import { AddHospitalComponent } from './main/hospitals/add-hospital/add-hospital.component';


const routes: Routes = [

{path:"", redirectTo:"home", pathMatch:"full"},
{path:"main", component:MainComponent},
{path:"emsevents", component:EmseventsComponent},
{path:"users", component:UsersComponent},
{path:"injureds", component:InjuredsComponent},
{path:"home", component:HomeComponent},
{path:"hospitals", component:HospitalsComponent},
{path:"user-profile/:id", component:UserProfileComponent},
{path:"add-user", component:AddUserComponent},
{path:"login", component:LoginComponent},
{path:"add-hospital", component:AddHospitalComponent}
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