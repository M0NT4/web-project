import { Component, OnInit,Input } from '@angular/core';
import { User } from '@app/shared/interfaces';
import { AuthService } from '@app/shared/services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent   {
  side_links = [
    { path: 'user/home', class: "fas fa-home", title: 'Home' },
    { path: 'user/challenges', class: 'fas fa-flag ', title: 'Challenges' },
    { path: 'user/scoreboard', class: 'fas fa-chart-line  ', title: 'Scoreboard' },
    { path: 'user/teams', class: 'fas fa-users fa-smc', title: 'Teams' },

  ];


  @Input() user: User | null = null;
  constructor(private router: Router, private authService: AuthService) {}

  logout(): void {
    this.authService.signOut();
    this.router.navigateByUrl('/auth/login');
  }

}
