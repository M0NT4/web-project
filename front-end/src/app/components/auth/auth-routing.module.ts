import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {LoggedOutUsers} from './auth.guard';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[LoggedOutUsers]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate:[LoggedOutUsers]
  },

];

export const AuthRoutingModule = RouterModule.forChild(routes);
