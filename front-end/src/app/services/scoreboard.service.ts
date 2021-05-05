import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ScoreboardService {
  private model ="scoreboard";

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(`${BASE_URL}${this.model}`);
  }

}
