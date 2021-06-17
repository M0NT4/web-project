import { Routes, RouterModule } from '@angular/router';
import {LoggedOutUsers} from '@app/shared/guards/user.guard'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

];

export const AuthRoutingModule = RouterModule.forChild(routes);
