import { Component, OnInit} from '@angular/core';
import { ScoreboardService } from 'src/app/shared/services/scoreboard.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

   rows : any ;

    constructor(private scoreboardservice: ScoreboardService) { }

  ngOnInit(): void {
    this.loadRows();

  }
  loadRows() {
    this.scoreboardservice.all()
    .subscribe(rows => this.rows = rows);
  }


}
