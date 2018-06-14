import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EmsService } from './ems.service';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { EmseventsComponent } from './main/emsevents/emsevents.component';
import { InjuredsComponent } from './main/injureds/injureds.component';
import { UsersComponent } from './main/users/users.component';
import { HomeComponent } from './main/home/home.component';
import { HospitalsComponent } from './main/hospitals/hospitals.component';
import { UserProfileComponent } from './main/users/user-profile/user-profile.component';
import { AddUserComponent } from './main/users/add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { AddHospitalComponent } from './main/hospitals/add-hospital/add-hospital.component';
import { EditUserComponent } from './main/users/edit-user/edit-user.component';
import { EditHospitalComponent } from './main/hospitals/edit-hospital/edit-hospital.component';
import { EventDetailsComponent } from './main/emsevents/event-details/event-details.component';
import { EditEventComponent } from './main/emsevents/edit-event/edit-event.component';
import { InjuredReportComponent } from './main/injureds/injured-report/injured-report.component';
import { HospitalComponent } from './hospital/hospital.component';
import { EditInjuredComponent } from './hospital/edit-injured/edit-injured.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    EmseventsComponent,
    InjuredsComponent,
    UsersComponent,
    HomeComponent,
    HospitalsComponent,
    UserProfileComponent,
    AddUserComponent,
    LoginComponent,
    AddHospitalComponent,
    EditUserComponent,
    EditHospitalComponent,
    EventDetailsComponent,
    EditEventComponent,
    InjuredReportComponent,
    HospitalComponent,
    EditInjuredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
