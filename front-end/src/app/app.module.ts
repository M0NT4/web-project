import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ScoreboardComponent } from './component/scoreboard/scoreboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent
  ],
=======
import { AuthHeaderInterceptor } from './interceptors/header.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './shared/services';
import {OnlyAdminUsersGuard} from '@app/components/admin/admin-user.guard'
import { LoggedOutUsers, OnlyUsersGuard } from './shared/guards/user.guard';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
>>>>>>> 05313bd6f002c9e459a7f607b38367a9e7d5e46a
  imports: [
    BrowserAnimationsModule,
<<<<<<< HEAD
    MaterialModule,

  ],
  bootstrap: [AppComponent]
=======
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    },
    OnlyAdminUsersGuard,
    LoggedOutUsers,
    OnlyUsersGuard
  ],
  bootstrap: [AppComponent],
>>>>>>> 05313bd6f002c9e459a7f607b38367a9e7d5e46a
})
export class AppModule {}
