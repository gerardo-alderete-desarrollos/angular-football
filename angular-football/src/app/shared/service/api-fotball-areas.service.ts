import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const AREAS_URL = 'http://api.football-data.org/v2/areas/';
const API_KEY = '29f3aaccadd34f6e87041fbc08244562';
const HEADERS = {
  'X-Auth-Token': API_KEY
}
const OPTIONS = {
  headers: new HttpHeaders(HEADERS)
}
@Injectable()
export class ApiFotballAreasService {
  
  constructor(private http:HttpClient) { }

  getAreas(): Observable<any>{
    return this.http.get<any>(AREAS_URL,OPTIONS);
  }

}
