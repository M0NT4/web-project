import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  side_links = [
    { path: 'user/home', class: "fas fa-home", title: 'Home' },
    { path: 'user/challenges', class: 'fas fa-flag ', title: 'Challenges' },
    { path: 'user/scoreboard', class: 'fas fa-chart-line  ', title: 'Scoreboard' },
    { path: 'user/teams', class: 'fas fa-users fa-smc', title: 'Teams' },
    { path: 'auth/login', class: 'fa fa-sign-in-alt fa-sm', title: 'Login' },
    { path: 'auth/register', class: 'fas fa-user-plus fa-sm ', title: 'Register' },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
