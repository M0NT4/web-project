import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeamsService } from '@app/shared/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']

})
export class TeamsComponent implements OnInit {

  Name : string | any  ;
  teams : any ;

  constructor(private teamsservice: TeamsService) { }

  ngOnInit(): void {
  this.loadteams();

    }
  loadteams() {
  this.teamsservice.all()
  .subscribe(teams => this.teams = teams);
  }

  Search(form: NgForm) {
    if(this.Name != "") {

      this.Name = form.value.Name ;
    this.teams = this.teams.filter( (res: { Name: string; }) => res.Name.startsWith(this.Name) );
    } else if (this.Name == "") {
      this.loadteams();
    }
  }

}
