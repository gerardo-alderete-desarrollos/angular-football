import { TestBed, inject } from '@angular/core/testing';

import { AppiFootballTeamsService } from './appi-football-teams.service';

describe('AppiFootballTeamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppiFootballTeamsService]
    });
  });

  it('should be created', inject([AppiFootballTeamsService], (service: AppiFootballTeamsService) => {
    expect(service).toBeTruthy();
  }));
});
