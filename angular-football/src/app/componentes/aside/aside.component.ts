import { Component, OnInit } from '@angular/core';
import { Team } from '../../shared/models/team';
import { Competitions } from '../../shared/models/competitions';
import { Area } from '../../shared/models/area';
import { ApiFootballCompetitionsService } from '../../shared/service/api-football-competitions.service';
import { ApiFotballAreasService } from '../../shared/service/api-fotball-areas.service';
import { AppiFootballTeamsService } from '../../shared/service/appi-football-teams.service';


@Component({
  selector: 'fb-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  competencias:Array<Competitions> = new Array<Competitions>();
  areas:Array<Area> = new Array<Area>();
  equipos:Array<Team> = new Array<Team>();

  constructor(private afcs: ApiFootballCompetitionsService,
              private afas: ApiFotballAreasService,
              private afts: AppiFootballTeamsService) { }

  ngOnInit() {
    this.getCompetitions();
    this.getAreas();
    this.getEquipos();
  }

  getCompetitions(){
    this.afcs.getCompetitions()
      .subscribe( (data) => {
        // console.log('Conexion exitosa a COMPETENCIAS:');
        data.competitions.forEach(competition => {
          this.competencias.push(competition);
        });

      }, error => {
        console.log('error al conectarse al servidor');
        console.log(error);
      });
  }

  getAreas(){
    this.afas.getAreas()
      .subscribe( (data) => {

        data.areas.forEach( area => {
          this.areas.push(area);
        });
      }, error => {
        console.log('Error al traer las areas');
        console.log(error);
      });
  }

  getEquipos(){
    this.afts.getTeams()
      .subscribe( (data) => {
        data.teams.forEach(equipo => {
          this.equipos.push(equipo);
          
        });
        console.log('Equipos');
        console.log(this.equipos);
      }, error => {
        console.log('Error al traer los equipos');
        console.log(error);
      })
  }


}
