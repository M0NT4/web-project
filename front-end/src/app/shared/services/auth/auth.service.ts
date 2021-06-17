import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, EMPTY } from 'rxjs';
import { tap, pluck } from 'rxjs/operators';

import { TokenStorage } from './token.storage';
import {User} from '@app/shared/interfaces';
import {environment} from '@env/environment';
// interface for response
interface AuthResponse {
  token: string;
  user: User;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  private user$ = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private tokenStorage: TokenStorage) {}

  // Login function
  login(username: string, password: string): Observable<User>{
    return this.http
      .post<AuthResponse>(`${environment.apiUrl}/api/auth/login`, { username, password })
      .pipe(
        tap(({ token, user }) => {
          this.setUser(user);
          this.tokenStorage.saveToken(token);
        }),
        pluck('user')
      );
  }

  // Register function
  register(
    username:String,
    email:String,
    password:String,
    repeatPassword:String,
    fullname:String,
    teamname:String,
    teampass:String,
    country:String,
    teamoption:String

  ): Observable<User> {
    return this.http
      .post<AuthResponse>(`${environment.apiUrl}/api/auth/register`, {
        username,email, password, repeatPassword,fullname,teamname,teampass,country,teamoption
      })
      .pipe(
        tap(({ token, user }) => {

          this.setUser(user);
          this.tokenStorage.saveToken(token);
        }),
        pluck('user')
      );
  }

  setUser(user: User | null): void {
    if (user) {
      user.isAdmin = user.roles.includes('admin');
    }

    this.user$.next(user);
  }
  getUser(): Observable<User | null> {
    return this.user$.asObservable();
  }

  me(): Observable<User>{
    const token: string | null = this.tokenStorage.getToken();

    if (token === null) {
      return EMPTY;
    }
    return this.http.get<AuthResponse>(`${environment.apiUrl}/api/auth/me`).pipe(
      tap(({ user }) => this.setUser(user)),
      pluck('user')
    );
  }
  signOut(): void {
    this.tokenStorage.signOut();
    this.setUser(null);
  }
  getAuthorizationHeaders() {
    const token: string | null = this.tokenStorage.getToken() || '';
    return { Authorization: `Bearer ${token}` };
  }


}
