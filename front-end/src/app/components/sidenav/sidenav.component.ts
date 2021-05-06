import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  side_links = [
    { path: '/home', class: "fas fa-home", title: 'Home' },
    { path: '/challenges', class: 'fas fa-flag ', title: 'Challenges' },
    { path: '/scoreboard', class: 'fas fa-chart-line  ', title: 'Scoreboard' },
    { path: '/teams', class: 'fas fa-users fa-smc', title: 'Teams' },
    { path: '/login', class: 'fa fa-sign-in-alt fa-sm', title: 'Login' },
    { path: '/register', class: 'fas fa-user-plus fa-sm ', title: 'Register' },
    { path: '/logout', class: 'fas fa-sign-out-alt fa-sm ', title: 'Logout' },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
