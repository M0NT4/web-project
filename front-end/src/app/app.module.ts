import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AuthHeaderInterceptor } from './interceptors/header.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './shared/services';
import {OnlyAdminUsersGuard} from '@app/components/admin/admin-user.guard'
import { LoggedOutUsers, OnlyUsersGuard } from './shared/guards/user.guard';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
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
})
export class AppModule {}
