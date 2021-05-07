import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { HomeComponent } from './components/home/home.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { TeamsComponent } from './components/teams/teams.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ScoreboardService } from './services/scoreboard.service';
import { AdminComponent } from './components/admin/admin.component';
import { TeamComponent } from './components/team/team.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SearchPipe } from './components/teams/search.pipe';

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
