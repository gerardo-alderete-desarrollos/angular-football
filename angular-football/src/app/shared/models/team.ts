import { Area } from "./area";

export interface Team {
    id:number,
    area:Area,
    name:string,
    shortName: string,
    tla:string,
    crestUrl: string,
    address: string,
    email: string,
    founded: number,
    clubColors: string,
    venue: string,
    lastUpdated: Date
}
