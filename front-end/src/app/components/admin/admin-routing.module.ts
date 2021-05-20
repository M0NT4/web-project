import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OnlyAdminUsersGuard} from './admin-user.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    //canLoad: [OnlyAdminUsersGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
