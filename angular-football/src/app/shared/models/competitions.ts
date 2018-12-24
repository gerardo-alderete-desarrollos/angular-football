import { Area } from './area';
import { CurrentSeason } from './current-season' ;

export interface Competitions {
    id: number ,
    area: Area ,
    name: string ,
    code: string ,
    emblemUrl: string ,
    plan: string ,
    currentSeason: CurrentSeason ,
    numberOfAvailableSeasons: number ,
    lastUpdated: Date
}
