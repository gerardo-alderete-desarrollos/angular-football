import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Team } from '../../shared/models/team';

const TEAM_URL = 'http://api.football-data.org/v2/teams';
const API_KEY = '29f3aaccadd34f6e87041fbc08244562';
const HEADERS = {
  'X-Auth-Token': API_KEY
};

const OPTIONS = {
  headers: new HttpHeaders(HEADERS)
}
@Injectable()
export class AppiFootballTeamsService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<any>{
    return this.http.get<any>(TEAM_URL, OPTIONS)  ;
  }
}
