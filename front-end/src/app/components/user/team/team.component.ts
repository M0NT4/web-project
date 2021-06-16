import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }
  teamname : any='team';
  members = [
    {Name: "mohamed" , Email: "mohamed@gmail.com",},
    {Name:"montassar" , Email : "monta@gmail.com",}
  ]

  ngOnInit(): void {
  }

}
