import { TestBed, inject } from '@angular/core/testing';

import { ApiFootballCompetitionsService } from './api-football-competitions.service';

describe('ApiFootballCompetitionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiFootballCompetitionsService]
    });
  });

  it('should be created', inject([ApiFootballCompetitionsService], (service: ApiFootballCompetitionsService) => {
    expect(service).toBeTruthy();
  }));
});
