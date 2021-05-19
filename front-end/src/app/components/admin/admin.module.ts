import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {OnlyAdminUsersGuard} from './admin-user.guard';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  providers: [
    OnlyAdminUsersGuard
  ]})
export class AdminModule {}
