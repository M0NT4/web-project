import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengesComponent } from './challenges/challenges.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';


const routes: Routes = [
  {
    path:'home',component:HomeComponent,
  },
  {
    path:'challenges',component:ChallengesComponent,
  },
  {
    path:'profile',component:ProfileComponent,
  },
  {
    path:'scoreboard',component:ScoreboardComponent,
  },
  {
    path:'settings',component:SettingsComponent,
  },
  {
    path:'team',component:TeamComponent,
  },
  {
    path:'teams',component:TeamsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
