import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TeamComponent } from './components/team/team.component';
import { TeamsComponent } from './components/teams/teams.component';

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
