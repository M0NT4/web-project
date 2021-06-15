import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';



import {OnlyAdminUsersGuard} from '@app/components/admin/admin-user.guard'
import { LoggedOutUsers } from './shared/guards/user.guard';
import {OnlyUsersGuard} from './shared/guards/user.guard'
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'admin',
    //canLoad: [ OnlyAdminUsersGuard ], it doesn't work for some reason
    loadChildren:()=>import('./components/admin/admin.module')
      .then(m=>m.AdminModule),
      //canLoad: [ OnlyAdminUsersGuard ]
    //canActivate:[OnlyAdminUsersGuard]
},
  {
    path:'auth',loadChildren:()=>import('./components/auth/auth.module')
    .then(mod=>mod.AuthModule),
    //canLoad:[LoggedOutUsers],
    //canActivate:[LoggedOutUsers]
  },
  {
    path:'user',loadChildren:()=>import('./components/user/user.module')
    .then(mod=>mod.UserModule),
    //canLoad:[OnlyUsersGuard],
    //canActivate:[OnlyUsersGuard]
  },
  {
    path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
