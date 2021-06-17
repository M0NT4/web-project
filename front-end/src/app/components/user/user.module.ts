import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { ChallengesComponent } from './challenges/challenges.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TeamComponent } from './team/team.component';
import { TeamsComponent } from './teams/teams.component';
import { SearchPipe } from './teams/search.pipe';
import { AuthService } from '@app/shared/services';


@NgModule({
  declarations: [
    ChallengesComponent,
    HomeComponent,
    LogoutComponent,
    ProfileComponent,
    ScoreboardComponent,
    SettingsComponent,
    TeamComponent,
    TeamsComponent,
    SearchPipe

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],

})
export class UserModule { }
