import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ScoreboardComponent } from './components/user/scoreboard/scoreboard.component';
import { HomeComponent } from './components/user/home/home.component';
import { ChallengesComponent } from './components/user/challenges/challenges.component';
import { TeamsComponent } from './components/user/teams/teams.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ScoreboardService } from './services/scoreboard.service';
import { AdminComponent } from './components/admin/admin.component';
import { TeamComponent } from './components/user/team/team.component';
import { SettingsComponent } from './components/user/settings/settings.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { SidenavComponent } from './components/user/sidenav/sidenav.component';
import { SearchPipe } from './components/user/teams/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    HomeComponent,
    ChallengesComponent,
    TeamsComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    TeamComponent,
    SettingsComponent,
    ProfileComponent,
    LogoutComponent,
    NavbarComponent,
    SidenavComponent,
    SearchPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,

  ],
  providers: [
    ScoreboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
