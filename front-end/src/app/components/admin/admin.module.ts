import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import {OnlyAdminUsersGuard} from './admin-user.guard';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    AdminRoutingModule
  ],
  providers:[
    OnlyAdminUsersGuard
  ]
})
export class AdminModule { }
