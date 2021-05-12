import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ChallengesComponent } from './components/user/challenges/challenges.component';
import { HomeComponent } from './components/user/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ScoreboardComponent } from './components/user/scoreboard/scoreboard.component';
import { SettingsComponent } from './components/user/settings/settings.component';
import { TeamComponent } from './components/user/team/team.component';
import { TeamsComponent } from './components/user/teams/teams.component';

const routes: Routes = [
  {path: "home" , component: HomeComponent },
  {path: "scoreboard" , component: ScoreboardComponent },
  {path: "challenges" , component: ChallengesComponent },
  {path: "teams" , component: TeamsComponent },
  {path: "settings" , component: SettingsComponent },
  {path: "admin" , component: AdminComponent },
  {path: "team" , component: TeamComponent },
  {path: "profile" , component: ProfileComponent },
  {path: "login" , component: LoginComponent },
  {path: "register" , component: RegisterComponent },
  {path: "logout" , component:LogoutComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
