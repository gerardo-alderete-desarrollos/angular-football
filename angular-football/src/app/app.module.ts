import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiFootballCompetitionsService } from './shared/service/api-football-competitions.service';
import { HeaderComponent } from './componentes/header/header.component';
import { ApiFotballAreasService } from './shared/service/api-fotball-areas.service';
import { AppiFootballTeamsService } from './shared/service/appi-football-teams.service';
import { AsideComponent } from './componentes/aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiFootballCompetitionsService, ApiFotballAreasService, AppiFootballTeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
