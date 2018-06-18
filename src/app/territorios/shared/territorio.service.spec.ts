import { TestBed, inject } from '@angular/core/testing';

import { TerritorioService } from './territorio.service';

describe('TerritorioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TerritorioService]
    });
  });

  it('should be created', inject([TerritorioService], (service: TerritorioService) => {
    expect(service).toBeTruthy();
  }));
});
