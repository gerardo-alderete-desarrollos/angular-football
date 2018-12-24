import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Competitions } from '../models/competitions';
import { Area } from '../models/area';
import { CurrentSeason } from '../models/current-season';


const COMPETITIONS_URL = 'http://api.football-data.org/v2/competitions';
const API_KEY = '29f3aaccadd34f6e87041fbc08244562';
const HEADERS = {
  'X-Auth-Token': '29f3aaccadd34f6e87041fbc08244562'
}
const OPTIONS = {
  headers: new HttpHeaders(HEADERS),
}

@Injectable()
export class ApiFootballCompetitionsService {

  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<any>{
    return this.http.get<any>(COMPETITIONS_URL,OPTIONS);
  }
}
