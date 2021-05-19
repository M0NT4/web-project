import { Component, OnInit,Input } from '@angular/core';
import { User } from '@app/shared/interfaces';
import { AuthService } from '@app/shared/services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  @Input() user: User | null = null;
  constructor(private router: Router, private authService: AuthService) {}

  logout(): void {
    this.authService.signOut();
    this.router.navigateByUrl('/auth/login');
  }

}
