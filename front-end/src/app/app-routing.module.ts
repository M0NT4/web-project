import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ScoreboardComponent } from './component/scoreboard/scoreboard.component';

const routes: Routes = [
  {path: "scoreboard" , component: ScoreboardComponent }
=======
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
    canActivate:[OnlyAdminUsersGuard]
},
  {
    path:'auth',loadChildren:()=>import('./components/auth/auth.module')
    .then(mod=>mod.AuthModule),
    //canLoad:[LoggedOutUsers],
    canActivate:[LoggedOutUsers]
  },
  {
    path:'user',loadChildren:()=>import('./components/user/user.module')
    .then(mod=>mod.UserModule),
    //canLoad:[OnlyUsersGuard],
    canActivate:[OnlyUsersGuard]
  },
  {
    path: '**', redirectTo: '' }
>>>>>>> 05313bd6f002c9e459a7f607b38367a9e7d5e46a
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
