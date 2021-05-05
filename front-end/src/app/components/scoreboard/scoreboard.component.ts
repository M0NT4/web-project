import { Component, OnInit} from '@angular/core';
import { ScoreboardService } from '../../services/scoreboard.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  rows:any;
  constructor(private scoreboardService:ScoreboardService) { }
  ngOnInit(): void {
    this.loadRows();

  }
  loadRows(){
    this.scoreboardService.all().subscribe(rows =>this.rows=rows);
  }

}
