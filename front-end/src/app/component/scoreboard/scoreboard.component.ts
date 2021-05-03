import { Component} from '@angular/core';



@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent {

    Team = "" ;
    Ranking = 0 ;
    Country = "" ;
    Score = 0 ;

   rows = [
      {Ranking: 1, Team: 'Za33',Score: 5000, Country: 'TN'},
      {Ranking: 2, Team: 'Fword',Score: 1, Country: 'FR'},
      {Ranking: 3, Team: 'Empty_',Score: 0, Country: 'wajdi'},

    ];

}
