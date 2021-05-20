import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  username: string | null = null;
  password: string | null = null;
  constructor(private router: Router, private authService: AuthService) { }

  login(): void {
    this.authService.login(this.username!, this.password!).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
