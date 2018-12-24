import { Component, OnInit } from '@angular/core';
import { ApiFootballCompetitionsService } from '../app/shared/service/api-football-competitions.service';
import { Competitions } from './shared/models/competitions';

@Component({
  selector: 'fb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  competencias:Array<Competitions> = new Array<Competitions>();
  topCompetencias:Array<Competitions> = new Array<Competitions>();
  contador: number = 0;

  constructor(private afcs: ApiFootballCompetitionsService){
  }

  ngOnInit(){
    this.afcs.getCompetitions()
      .subscribe( (data) => {
        console.log('Conexion exitosa a COMPETENCIAS:');
        data.competitions.forEach(competition => {
          this.competencias.push(competition);
        });

        console.log(this.getTopCompetencias(5));

      }, error => {
        console.log('error al conectarse al servidor');
        console.log(error);
      });


     
  }

  getTopCompetencias(numeroCompetencias:number): Array<Competitions>{
    
    this.competencias.forEach( c => {
      this.contador++;
      if(this.contador <= numeroCompetencias){
        this.topCompetencias.push(c);
      }
    })
    return this.topCompetencias;
    
  }
}
