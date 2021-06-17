import { Injectable } from '@angular/core';
import { CanLoad,CanActivate } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '@app/shared/services';

@Injectable()
export class OnlyUsersGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): Observable<boolean> {

    return this.authService.getUser().pipe(
      map(
        user => {
        if (user !== null ) {
          return true;
        }
        return false;
      })
    );
  }

}
@Injectable()
export class LoggedOutUsers implements CanActivate{
  constructor(private authService: AuthService) {}
  canActivate(): Observable<boolean> {
    return this.authService.getUser().pipe(
      map(
        user => {
        if (!user?.username ) {
          return true;
        }
        return true;
      })
    );
  }


}
