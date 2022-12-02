import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GlobalComponent } from './global.component';
import { GlobalService } from './service/global.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './modules/home/home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UsersComponent } from './modules/users/users.component';
import { LocationComponent } from './modules/location/location.component';
import { CompanyComponent } from './modules/company/company.component';
import { UserComponent } from './modules/user/user.component';

@NgModule({
  declarations: [
    GlobalComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    LocationComponent,
    CompanyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    IonicModule,
  ],
  providers: [GlobalService],
})
export class GlobalModule {}
