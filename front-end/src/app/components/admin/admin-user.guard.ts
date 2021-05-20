import { Injectable } from '@angular/core';
import { CanActivate,Router,CanLoad } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '@app/shared/services';

@Injectable()
export class OnlyAdminUsersGuard implements CanActivate,CanLoad {
  constructor(private authService: AuthService,private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.getUser().pipe(
      map(
        user => {
        if (user !== null && user.isAdmin) {
          return true;
        }

        return false;
      })
    );
  }
  canLoad(): Observable<boolean> {

    return this.authService.getUser().pipe(
      map(
        user => {
        if (user !== null && user.isAdmin) {
          return true;
        }


        return false;
      })
    );
  }


}
