import { TestBed, inject } from '@angular/core/testing';

import { ApiFotballAreasService } from './api-fotball-areas.service';

describe('ApiFotballAreasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiFotballAreasService]
    });
  });

  it('should be created', inject([ApiFotballAreasService], (service: ApiFotballAreasService) => {
    expect(service).toBeTruthy();
  }));
});
