import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OnlyAdminUsersGuard} from '@app/components/admin/admin-user.guard'
import { LoggedOutUsers } from '@app/components/auth/auth.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'admin',
    loadChildren:()=>import('./components/admin/admin.module')
    .then(mod=>mod.AdminModule),
    canLoad: [ OnlyAdminUsersGuard ],
    canActivate:[OnlyAdminUsersGuard]
  },
  {
    path:'auth',loadChildren:()=>import('./components/auth/auth.module')
    .then(mod=>mod.AuthModule),
    canActivate:[LoggedOutUsers]
  },
  {
    path:'user',loadChildren:()=>import('./components/user/user.module')
    .then(mod=>mod.UserModule),
  },
  {
    path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
